// Generated from C:\Code\SqlMap\src\parser\SqlMap.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SqlMapParser.
function SqlMapListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SqlMapListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SqlMapListener.prototype.constructor = SqlMapListener;

// Enter a parse tree produced by SqlMapParser#root.
SqlMapListener.prototype.enterRoot = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#root.
SqlMapListener.prototype.exitRoot = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#sqlDef.
SqlMapListener.prototype.enterSqlDef = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#sqlDef.
SqlMapListener.prototype.exitSqlDef = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#defLine.
SqlMapListener.prototype.enterDefLine = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#defLine.
SqlMapListener.prototype.exitDefLine = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#includeLine.
SqlMapListener.prototype.enterIncludeLine = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#includeLine.
SqlMapListener.prototype.exitIncludeLine = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#textLine.
SqlMapListener.prototype.enterTextLine = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#textLine.
SqlMapListener.prototype.exitTextLine = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#sqlType.
SqlMapListener.prototype.enterSqlType = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#sqlType.
SqlMapListener.prototype.exitSqlType = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#include.
SqlMapListener.prototype.enterInclude = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#include.
SqlMapListener.prototype.exitInclude = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#param.
SqlMapListener.prototype.enterParam = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#param.
SqlMapListener.prototype.exitParam = function(ctx) {
};


// Enter a parse tree produced by SqlMapParser#sqlId.
SqlMapListener.prototype.enterSqlId = function(ctx) {
};

// Exit a parse tree produced by SqlMapParser#sqlId.
SqlMapListener.prototype.exitSqlId = function(ctx) {
};



exports.SqlMapListener = SqlMapListener;