var dl = require("../../lib/loader/DibLoader");

var sqlMap = {};
dl.loadSqlMapFile("C:\\Code\\dib\\test\\parser\\sql.sql", sqlMap);
dl.loadSqlMapDir("C:\\Code\\dib\\test\\parser\\", sqlMap, function(err, sqlMap, files){
    if(err) throw err;
    console.log(files);
    console.log(sqlMap);
});
