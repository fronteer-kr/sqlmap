// Generated from C:\Code\sqlmap-new\lib\parser\SqlMapParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SqlMapParser.
function SqlMapParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SqlMapParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SqlMapParserListener.prototype.constructor = SqlMapParserListener;

// Enter a parse tree produced by SqlMapParser#root.
SqlMapParserListener.prototype.enterRoot = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#root.
SqlMapParserListener.prototype.exitRoot = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#sqlStatement.
SqlMapParserListener.prototype.enterSqlStatement = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#sqlStatement.
SqlMapParserListener.prototype.exitSqlStatement = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#sqlDeclare.
SqlMapParserListener.prototype.enterSqlDeclare = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#sqlDeclare.
SqlMapParserListener.prototype.exitSqlDeclare = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#sqlBody.
SqlMapParserListener.prototype.enterSqlBody = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#sqlBody.
SqlMapParserListener.prototype.exitSqlBody = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#sqlLine.
SqlMapParserListener.prototype.enterSqlLine = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#sqlLine.
SqlMapParserListener.prototype.exitSqlLine = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#ifStatement.
SqlMapParserListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#ifStatement.
SqlMapParserListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#ifDeclare.
SqlMapParserListener.prototype.enterIfDeclare = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#ifDeclare.
SqlMapParserListener.prototype.exitIfDeclare = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#forStatement.
SqlMapParserListener.prototype.enterForStatement = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#forStatement.
SqlMapParserListener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#forDeclare.
SqlMapParserListener.prototype.enterForDeclare = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#forDeclare.
SqlMapParserListener.prototype.exitForDeclare = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#foreachStatement.
SqlMapParserListener.prototype.enterForeachStatement = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#foreachStatement.
SqlMapParserListener.prototype.exitForeachStatement = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#foreachDeclare.
SqlMapParserListener.prototype.enterForeachDeclare = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#foreachDeclare.
SqlMapParserListener.prototype.exitForeachDeclare = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#inExpr.
SqlMapParserListener.prototype.enterInExpr = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#inExpr.
SqlMapParserListener.prototype.exitInExpr = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#indexExpr.
SqlMapParserListener.prototype.enterIndexExpr = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#indexExpr.
SqlMapParserListener.prototype.exitIndexExpr = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#expr.
SqlMapParserListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#expr.
SqlMapParserListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#includeStatement.
SqlMapParserListener.prototype.enterIncludeStatement = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#includeStatement.
SqlMapParserListener.prototype.exitIncludeStatement = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#colon.
SqlMapParserListener.prototype.enterColon = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#colon.
SqlMapParserListener.prototype.exitColon = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#openBrace.
SqlMapParserListener.prototype.enterOpenBrace = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#openBrace.
SqlMapParserListener.prototype.exitOpenBrace = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#closeBrace.
SqlMapParserListener.prototype.enterCloseBrace = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#closeBrace.
SqlMapParserListener.prototype.exitCloseBrace = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#openParen.
SqlMapParserListener.prototype.enterOpenParen = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#openParen.
SqlMapParserListener.prototype.exitOpenParen = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#closeParen.
SqlMapParserListener.prototype.enterCloseParen = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#closeParen.
SqlMapParserListener.prototype.exitCloseParen = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#sqlId.
SqlMapParserListener.prototype.enterSqlId = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#sqlId.
SqlMapParserListener.prototype.exitSqlId = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#param.
SqlMapParserListener.prototype.enterParam = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#param.
SqlMapParserListener.prototype.exitParam = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#plainText.
SqlMapParserListener.prototype.enterPlainText = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#plainText.
SqlMapParserListener.prototype.exitPlainText = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#nl.
SqlMapParserListener.prototype.enterNl = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#nl.
SqlMapParserListener.prototype.exitNl = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#eof.
SqlMapParserListener.prototype.enterEof = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#eof.
SqlMapParserListener.prototype.exitEof = function(ctx) {
};



exports.SqlMapParserListener = SqlMapParserListener;