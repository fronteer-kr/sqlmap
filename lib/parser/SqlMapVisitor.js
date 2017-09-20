// Generated from C:\Code\sqlmap\lib\parser\SqlMap.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SqlMapParser.

function SqlMapVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SqlMapVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SqlMapVisitor.prototype.constructor = SqlMapVisitor;

// Visit a parse tree produced by SqlMapParser#root.
SqlMapVisitor.prototype.visitRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#sqlDef.
SqlMapVisitor.prototype.visitSqlDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#defLine.
SqlMapVisitor.prototype.visitDefLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#includeLine.
SqlMapVisitor.prototype.visitIncludeLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#include.
SqlMapVisitor.prototype.visitInclude = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#textLine.
SqlMapVisitor.prototype.visitTextLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#sqlType.
SqlMapVisitor.prototype.visitSqlType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#param.
SqlMapVisitor.prototype.visitParam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#sqlId.
SqlMapVisitor.prototype.visitSqlId = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SqlMapVisitor = SqlMapVisitor;