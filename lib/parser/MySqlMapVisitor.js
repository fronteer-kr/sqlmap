var SqlMapVisitor = require('./SqlMapVisitor').SqlMapVisitor;
const {
    SqlMapSql,
    SqlMapSqlLine,
    SqlMapSqlLineType,
    SqlMapSqlType,
    SqlMapSqlParamType,
    SqlMapSqlParam
} = require('./SqlMapSql');
const { ParamContext } = require('./SqlMapParser').SqlMapParser;

/** @param {SqlMapContext} SqlMapContext */
function MySqlMapVisitor(SqlMapContext) {
    SqlMapVisitor.call(this);
    /** @type {SqlMapContext} */
    this.context = SqlMapContext || new SqlMapContext();
    return this;
}

MySqlMapVisitor.prototype = Object.create(SqlMapVisitor.prototype);
MySqlMapVisitor.prototype.constructor = MySqlMapVisitor;

// Visit a parse tree produced by SqlMapParser#root.
MySqlMapVisitor.prototype.visitRoot = function (ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SqlMapParser#sqlDef.
/** @param {SqlDefContext} ctx */
MySqlMapVisitor.prototype.visitSqlDef = function (ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SqlMapParser#defLine.
/** @param {DefLineContext} ctx */
MySqlMapVisitor.prototype.visitDefLine = function (ctx) {
    this.context.currentSql = new SqlMapSql();
    this.context.currentSql.file = this.context.currentFile;
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SqlMapParser#includeLine.
/** @param {IncludeLineContext} ctx */
MySqlMapVisitor.prototype.visitIncludeLine = function (ctx) {
    if (this.context.currentSql) {
        var line = new SqlMapSqlLine();
        line.type = SqlMapSqlLineType.INCLUDE;
        this.context.currentSql.lines.push(line);
    }
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SqlMapParser#textLine.
/** @param {TextLineContext} ctx */
MySqlMapVisitor.prototype.visitTextLine = function (ctx) {
    if (this.context.currentSql) {
        var line = new SqlMapSqlLine();
        this.context.currentSql.lines.push(line);
        /** @type {string} */
        var str = '';
        for (var i = 0; i < ctx.children.length; i++) {
            var child = ctx.children[i];
            if (child instanceof ParamContext) {
                line.type = SqlMapSqlLineType.DYNAMIC;
                var param = new SqlMapSqlParam();
                /** @type {string} */
                var paramText = child.children[0].symbol.text;
                if (paramText.indexOf('??') >= 0) {
                    str += '??';
                    param.name = paramText.replace('??', '');
                    param.type = SqlMapSqlParamType.ESCAPE;
                } else {
                    str += '?';
                    param.name = paramText.replace('?', '');
                    param.type = SqlMapSqlParamType.NORMAL;
                }
                line.params.push(param);
            } else {
                /** @type {string} */
                var text = null;
                if (child.symbol) {
                    text = child.symbol.text;
                } else {
                    text = child.children[0].symbol.text;
                }
                text = text.replace(/([ \t]+)|((\r?\n)+)/, ' ');
                if (text) {
                    str = str + text;
                }
            }
        }
        line.text = str;
        // console.log(str);
    }
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SqlMapParser#sqlType.
/** @param {SqlTypeContext} ctx */
MySqlMapVisitor.prototype.visitSqlType = function (ctx) {
    if (this.context.currentSql) {
        var type = 0;
        switch (ctx.SQLTYPE) {
            case '#select': type = SqlMapSqlType.SELECT; break;
            case '#update': type = SqlMapSqlType.UPDATE; break;
            case '#insert': type = SqlMapSqlType.INSERT; break;
            case '#delete': type = SqlMapSqlType.DELETE; break;
            case '#sql': type = SqlMapSqlType.SQL; break;
            default: break;
        }
        this.context.currentSql.type = type;
    }
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SqlMapParser#include.
/** @param {IncludeContext} ctx */
MySqlMapVisitor.prototype.visitInclude = function (ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SqlMapParser#param.
/** @param {ParamContext} ctx */
MySqlMapVisitor.prototype.visitParam = function (ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by SqlMapParser#sqlId.
/** @param {SqlIdContext} ctx */
MySqlMapVisitor.prototype.visitSqlId = function (ctx) {
    if (this.context.currentSql) {
        /** @type {string} */
        var str = '';
        for (var i = 0; i < ctx.children.length; i++) {
            var child = ctx.children[i];
            /** @type {string} */
            var text = child.symbol.text;
            str += text;
        }
        str = str.trim();

        if (!this.context.currentSql.id) {
            this.context.currentSql.id = str;
            /** @type {SqlMapSql} */
            var oldSql = this.context.sqlMap[this.context.currentSql.id];
            if (oldSql) {
                console.error('Overwrite sql: \'' + this.context.currentSql.id +
                    '\', origin sql file: \'' + oldSql.file +
                    '\', current sql file: \'' + this.context.currentFile + '\'');
            }
            this.context.sqlMap[this.context.currentSql.id] = this.context.currentSql;
        } else {
            /** @type {SqlMapSqlLine} */
            var line = this.context.currentSql.lines[this.context.currentSql.lines.length - 1];
            line.text = str;
        }
    }
    return this.visitChildren(ctx);
};

exports.MySqlMapVisitor = MySqlMapVisitor;
