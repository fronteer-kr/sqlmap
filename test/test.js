var Path = require('path');
var SqlMap = require('../sqlmap');

var masterConfig = {
    host: 'localhost',
    user: 'root',
    password: 'nxshuiguo',
    database: 'dib'
};
var sqlMap = new SqlMap(masterConfig);

SqlMap.loadSqlMaps(Path.resolve(__dirname, 'parser'),
    function (err, map) {
        if (err) throw err;

        sqlMap.dQuery('test.sql1', {
            userName: 'root',
            email: 'nxshuiguo@163.com',
            ids: ['1', 2, 3],
            orderBy: 'userName',
            from: 0,
            to: 100
        }, function (err, results, fields) {
            if (err) throw err;
            console.log();
            console.log(results[0]);
            console.log();
            console.log(fields[1]);
            sqlMap.destroy(function (err) {
                if (err) throw err;
                console.log('\nConnections destroyed!');
            });
        });
    });
