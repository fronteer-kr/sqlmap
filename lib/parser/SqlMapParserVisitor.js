// Generated from C:\Code\sqlmap-new\lib\parser\SqlMapParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SqlMapParser.

function SqlMapParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SqlMapParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SqlMapParserVisitor.prototype.constructor = SqlMapParserVisitor;

// Visit a parse tree produced by SqlMapParser#root.
SqlMapParserVisitor.prototype.visitRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#sqlStatement.
SqlMapParserVisitor.prototype.visitSqlStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#sqlDeclare.
SqlMapParserVisitor.prototype.visitSqlDeclare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#sqlBody.
SqlMapParserVisitor.prototype.visitSqlBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#sqlLine.
SqlMapParserVisitor.prototype.visitSqlLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#ifStatement.
SqlMapParserVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#ifDeclare.
SqlMapParserVisitor.prototype.visitIfDeclare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#forStatement.
SqlMapParserVisitor.prototype.visitForStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#forDeclare.
SqlMapParserVisitor.prototype.visitForDeclare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#foreachStatement.
SqlMapParserVisitor.prototype.visitForeachStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#foreachDeclare.
SqlMapParserVisitor.prototype.visitForeachDeclare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#inExpr.
SqlMapParserVisitor.prototype.visitInExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#indexExpr.
SqlMapParserVisitor.prototype.visitIndexExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#expr.
SqlMapParserVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#includeStatement.
SqlMapParserVisitor.prototype.visitIncludeStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#colon.
SqlMapParserVisitor.prototype.visitColon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#openBrace.
SqlMapParserVisitor.prototype.visitOpenBrace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#closeBrace.
SqlMapParserVisitor.prototype.visitCloseBrace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#openParen.
SqlMapParserVisitor.prototype.visitOpenParen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#closeParen.
SqlMapParserVisitor.prototype.visitCloseParen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#sqlId.
SqlMapParserVisitor.prototype.visitSqlId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#param.
SqlMapParserVisitor.prototype.visitParam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#plainText.
SqlMapParserVisitor.prototype.visitPlainText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#nl.
SqlMapParserVisitor.prototype.visitNl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SqlMapParser#eof.
SqlMapParserVisitor.prototype.visitEof = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SqlMapParserVisitor = SqlMapParserVisitor;