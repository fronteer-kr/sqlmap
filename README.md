# sqlmap
Simple SQL mapper engine for Node.js.<br>
>Only support MySql for now.

## SQL map syntax
<code>
<pre>
#select user.query:
    select * from user where 1=1
    and id=id?
    and userName=userName?
    and password=password?
    and email=email?
    and id in (ids?)
</pre>
</code>

### SQL definition line
> <span style="color: orange">#select</span>[
    <span style="color: orange">#insert</span>, 
    <span style="color: orange">#update</span>, 
    <span style="color: orange">#delete</span>,
    <span style="color: orange">#sql</span>,] 
    <span style="color: slateblue">SQLID</span>
    <span style="color: cyan">:</span>

#### SQL ID
A SQLID is an identify for a SQL.<br>
You should make sure your SQLID is unique for all SQL definitions.<br>

### SQL body

#### Params
<span style="color: orange">param</span><span style="color: green">?</span><br>
This stands for a parameter named "param". The "?" means if the "param" is empty(undefined, null, empty string, false, 0), the whole line will be removed from the whole SQL.

<span style="color: orange">param</span><span style="color: green">??</span><br>
Almost the same as <span style="color: orange">param</span><span style="color: green">?</span>. Two "?" means the parameter value will be escaped as a column or table name when the parameter is filled.<br>
If the value of <span style="color: orange">param</span> is "userName", then it is escaped as \`userName\` when filled.

The "?" can be in the front of parameter name as 
<span style="color: green">?</span><span style="color: orange">param</span>
or
<span style="color: green">??</span><span style="color: orange">param</span> 
with your like.
>Please note that if one line has 2 or more parameters, the line will be removed when any parameter is empty. Multipal parameters in one line have the relationship of "and".

#### Include a SQL by SQLID
> <span style="color: orange">#include</span> <span style="color: slateblue">SQLID</span><br>

The SQL with SQLID will be replace in the position of the <span style="color: orange">#include</span> line.

<code>
<pre>
#sql common.paging:
    order by orderBy?? limit from?, to?
</pre>
</code>
<code>
<pre>
#select user.query:
    select * from user where 1=1
    and id=id?
    and userName=userName?
    and password=password?
    and email=email?
    and id in (ids?)
    #include common.paging
</pre>
</code>

## API Reference

### Load SQL maps
> SQL map files' extension must be ".sql";
<code>
<pre>
var SqlMap = require("sqlmap");
SqlMap.loadSqlMaps(sql_map_file_or_dir_path, function(err, mapContext){
    if (err) throw err;
    ...
});
</pre>
</code>

### Manage connection
> Only for MySql for now. <br>
  The connection is pooled and clustered at backend by mysqljs/mysql module.
<code>
<pre>
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

sqlMap.destroy(function(err)
{
    if (err) throw err;
    console.log("Connections destroyed!");
});
</pre>
</code>

### Execute a SQL

#### Dynamic SQL query
> Reading and writing separation automatically. <br>
> When execute a #select SQL, then the engine auto chooses the slave configure to apply a query. The engine auto chooses master configure for other SQL types.
<code>
<pre>
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
</pre>
</code>

>The generated SQL is:
<code>
<pre>
select * from user where 1=1 and id in ('1', 2, 3) order by `userName` limit 0, 100
</pre>
</code>

#### Native SQL query wrapper for mysqljs/mysql
<code>
<pre>
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
</pre>
</code>

## Example
>Please refer the test/test.js.
