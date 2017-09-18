var fs = require('fs');
var Path = require('path');
var antlr4 = require('antlr4');
var SqlMapLexer = require('../../lib/parser/SqlMapLexer');
var SqlMapParser = require('../../lib/parser/SqlMapParser');
var MySqlMapVisitor = require('../../lib/parser/MySqlMapVisitor');
var SqlMapSql = require('../../lib/parser/SqlMapSql');

var input = fs.readFileSync(Path.resolve(__dirname, 'sql.sql')).toString();
var chars = new antlr4.InputStream(input);
var lexer = new SqlMapLexer.SqlMapLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new SqlMapParser.SqlMapParser(tokens);
parser.buildParseTrees = true;
var tree = parser.root();
// var listener = new MySqlMapListener.MySqlMapListener();
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
var context = new SqlMapSql.SqlMapContext();
var visitor = new MySqlMapVisitor.MySqlMapVisitor(context);
visitor.visitRoot(tree);
context.check();
console.log(context.sqlMap);
