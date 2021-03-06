# sqlmap

Simple SQL mapper engine for Node.js.
> Only support MySql for now.

## SQL map syntax

```sql
#select user.query:
    select * from user where 1=1
        and id=@id
        and userName=@userName
        and password=@password
        and email=@email
        and id in (@ids)
```

### SQL definition line

> \#select[#insert, #update, #delete, #sql] SQLID:
>
> \#select[#insert, #update, #delete, #sql] SQLID { ... }

#### SQL ID

A SQLID is an identify for a SQL.

You should make sure your SQLID is unique for all SQL definitions.

### SQL body

#### Params

* @param or @@param

This stands for a parameter named "param". One '@' means the param is optional, two '@'s means the param is mandatory.

>The sql body is recognized as lines.
>
>If there are parameters in one line, when paramters being filled:
>> if all parameters are optional, the line will be removed when any paramter is empty(undefined, null, empty string, false, 0)
>>
>> if any parameter is mandatory, the line will not be removed

* @param@ or @@param@

Suffix "@" means the parameter value will be escaped as a column or table name when the parameter is filled.

> For example, if the value of param is "user", then it is escaped as \`user\` when filled.

#### if, for, foreach blocks

>Very like JavaScript code except you need replace the parameter as @param.

```sql
#select test.sql1:
    select * from user where 1=1
    and id=@id
    and userName=@userName
    and password=@password
    and email=@email
    #if(@ids && @ids.length > 0){
        #for(var i = 0; i < @ids.length; i++) {
            or id= @ids[i]
        }
    }
```

#### Include a SQL by SQLID

> \#include(SQLID)

The SQL with SQLID will be replace in the position of the #include line.

```sql
#sql common.paging:
    order by @orderBy@ limit @from, @to

#select user.query:
    select * from user where 1=1
        and id=@id
        and userName=@userName
        and password=@password
        and email=@email
        and id in (@ids)
        #include(common.paging)
```

## API Reference

### Load SQL maps

> SQL map files' extension must be ".sql";

```js
var SqlMap = require("sqlmap");
SqlMap.loadSqlMaps(sql_map_file_or_dir_path, function(err, mapContext){
    if (err) throw err;
    ...
});
```

### Manage connection

> Only for MySql for now.

The connection is pooled and clustered at backend by [mysqljs/mysql](https://github.com/mysqljs/mysql) module.

```js
var SqlMap = require('sqlmap');

var masterConfig = {
    host: 'db_master_host',
    user: 'db_user_name',
    password: 'db_password',
    database: 'db_name'
};

var slaveConfig = {
    host: 'db_slave_host',
    user: 'db_user_name',
    password: 'db_password',
    database: 'db_name'
};
var sqlMap = new SqlMap(masterConfig, [slaveConfig]);

sqlMap.destroy(function(err) {
    if (err) throw err;
    console.log("Connections destroyed!");
});
```

### Execute a SQL

#### Dynamic SQL query

> Reading and writing separation automatically. 
> When execute a #select SQL, then the engine auto chooses the slave configure to apply a query. The engine auto chooses master configure for other SQL types.

```js
//Assume the SQLID is "user.query"
sqlMap.dQuery("user.query", {
        ids: ['1', 2, 3],
        orderBy: 'userName',
        from: 0,
        to: 100
    }, function (err, results) {
        if (err) throw err;
        // results is an array for the returned objects.
        ...
    });
```

> The generated SQL is:

```sql
select * from user where 1=1 and id in ('1', 2, 3) order by `userName` limit 0, 100
```

#### Native SQL query wrapper for [mysqljs/mysql](https://github.com/mysqljs/mysql)

```js
sqlMap.query("select * from user where id in (?) order by ?? limit ? to ?", [
        ['1', 2, 3],
        'userName',
        0,
        100
    ], function (err, results) {
        if (err) throw err;
        // results is an array for the returned objects.
        ...
    });
```

## Example

> Please refer the test/test-promise.js.
