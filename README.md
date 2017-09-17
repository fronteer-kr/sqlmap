# sqlmap

Simple SQL mapper engine for Node.js.
> Only support MySql for now.

## SQL map syntax

```sql
#select user.query:
    select * from user where 1=1
        and id=id?
        and userName=userName?
        and password=password?
        and email=email?
        and id in (ids?)
```

### SQL definition line

> \#select[#insert, #update, #delete, #sql] SQLID:

#### SQL ID

A SQLID is an identify for a SQL.

You should make sure your SQLID is unique for all SQL definitions.

### SQL body

#### Params

* param?

This stands for a parameter named "param". The "?" means if the "param" is empty(undefined, null, empty string, false, 0), the whole line will be removed from the whole SQL.

* param??

Almost the same as param?. Two "?" means the parameter value will be escaped as a column or table name when the parameter is filled.

If the value of param is "userName", then it is escaped as \`userName\` when filled.
The "?" can be in the front of parameter name as ?param or ??param as your like.
> Please note that if one line has 2 or more parameters, the line will be removed when any parameter is empty. Multipal parameters in one line have the relationship of "and".

#### Include a SQL by SQLID

> \#include SQLID

The SQL with SQLID will be replace in the position of the #include line.

```sql
#sql common.paging:
    order by orderBy?? limit from?, to?

#select user.query:
    select * from user where 1=1
        and id=id?
        and userName=userName?
        and password=password?
        and email=email?
        and id in (ids?)
        #include common.paging
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

The connection is pooled and clustered at backend by mysqljs/mysql module.

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

#### Native SQL query wrapper for mysqljs/mysql

```js
sqlMap.dQuery("select * from user where id in (?) order by ?? limit ? to ?", [
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

> Please refer the test/test.js.
