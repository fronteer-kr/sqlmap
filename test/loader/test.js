var Path = require('path');
var loader = require('../../lib/loader/SqlMapLoader');

var sqlMap = {};
loader.loadSqlMapFile(Path.resolve(__dirname, '../sql.sql'), sqlMap);
loader.loadSqlMapDir(Path.resolve(__dirname), sqlMap, function (err, sqlMap, files) {
    if (err) throw err;
    console.log(files);
    console.log(sqlMap);
});
