var fs = require('fs');
var path = require('path');
var antlr4 = require('antlr4');
var SqlMapLexer = require('../parser/SqlMapLexer');
var SqlMapParser = require('../parser/SqlMapParser');
var MySqlMapVisitor = require('../parser/MySqlMapVisitor');
var SqlMapSql = require('../parser/SqlMapSql');

function traverseDirectory(dir, callback) {
    var dirList = [];
    fs.readdir(dir, function (err, list) {
        dir = fs.realpathSync(dir);
        if (err) {
            return callback(err);
        }
        var len = list.length;
        list.forEach(function (file) {
            file = dir + '/' + file;
            fs.stat(file, function (err, stat) {
                if (err) throw new Error('Load directory files failed.');
                dirList.push(file);
                if (stat && stat.isDirectory()) {
                    traverseDirectory(file, function (err, parsed) {
                        if (err) throw new Error('Load directory files failed.');
                        dirList = dirList.concat(parsed);
                        if (!--len) {
                            callback(null, dirList);
                        }
                    });
                } else {
                    if (!--len) {
                        callback(null, dirList);
                    }
                }
            });
        });
    });
}

function loadSqlMapFile(fileName, sqlMap, callback) {
    var input = fs.readFileSync(fileName).toString();
    var chars = new antlr4.InputStream(input);
    var lexer = new SqlMapLexer.SqlMapLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new SqlMapParser.SqlMapParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.root();
    // var listener = new MySqlMapListener.MySqlMapListener();
    // antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    var context = new SqlMapSql.SqlMapContext(sqlMap);
    context.currentFile = path.resolve(fileName);
    var visitor = new MySqlMapVisitor.MySqlMapVisitor(context);
    visitor.visitRoot(tree);
    context.check();
    if (typeof callback === 'function') callback(null, sqlMap, [path.resolve(fileName)]);
    return context.sqlMap;
}

function loadSqlMapDir(dirName, sqlMap, callback) {
    traverseDirectory(dirName, function (err, result) {
        if (err) {
            console.log(err);
            if (typeof callback === 'function') {
                callback(err);
            }
        } else {
            // console.log(result);
            var fileList = [];
            /** @type {array} */
            var res = result;
            for (var i = 0; i < res.length; i++) {
                var ext = path.extname(res[i]);
                if (ext && ext.toLowerCase() === '.sql') {
                    fileList.push(res[i]);
                    sqlMap = loadSqlMapFile(res[i], sqlMap);
                }
            }
            if (typeof callback === 'function') {
                callback(null, sqlMap, fileList);
            }
        }
    });
}

exports.loadSqlMapFile = loadSqlMapFile;
exports.loadSqlMapDir = loadSqlMapDir;
