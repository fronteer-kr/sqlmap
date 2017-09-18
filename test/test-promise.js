var Path = require('path');
var Promise = require('bluebird');
var SqlMap = require('../sqlmap');
Promise.promisifyAll(SqlMap);
Promise.promisifyAll(SqlMap.prototype);

var masterConfig = {
    host: 'localhost',
    user: 'root',
    password: 'nxshuiguo',
    database: 'dib'
};
var sqlMap = new SqlMap(masterConfig);

try {
    (async () => {
        var results = await sqlMap.queryAsync('select * from user where id in (?)', [[1, 2, 3]]);
        console.log(results[0]);

        await SqlMap.loadSqlMapsAsync(Path.resolve(__dirname, 'parser'));

        results = await sqlMap.dQueryAsync('test.sql1', {
            userName: 'root',
            email: 'nxshuiguo@163.com',
            ids: ['1', 2, 3],
            orderBy: 'userName',
            from: 0,
            to: 100
        });
        console.log(results[0]);

        await sqlMap.destroyAsync();
        console.log('\nConnections destroyed!');
    })().then();
} catch (err) {
    console.log(err);
}
