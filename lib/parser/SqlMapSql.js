const SqlMapSqlLineType = {
    STATIC: 0,
    DYNAMIC: 1,
    INCLUDE: 2
};

const SqlMapSqlType = {
    SELECT: 0,
    UPDATE: 1,
    INSERT: 2,
    DELETE: 3,
    SQL: 4
};

const SqlMapSqlParamType = {
    NORMAL: 0,
    ESCAPE: 1,
};

function SqlMapSqlParam() {
    /** @type {number} */
    this.type = SqlMapSqlParamType.NORMAL;
    /** @type {string} */
    this.name = '';
}

function SqlMapSqlLine() {
    /** @type {string} */
    this.text = '';
    /** @type {number} */
    this.type = SqlMapSqlLineType.STATIC;
    /** @type {array} */
    this.params = [];

    return this;
}

function SqlMapSql() {
    /** @type {string} */
    this.id = '';
    /** @type {number} */
    this.type = SqlMapSqlType.SELECT;
    /** @type {array} */
    this.lines = [];
    /** @type {string} */
    this.file = '';

    return this;
}

function SqlMapContext(sqlMap) {
    /** @type {Object} */
    this.sqlMap = sqlMap || {};
    /** @type {SqlMapSql} */
    this.currentSql = null;
    /** @type {string} */
    this.currentFile = '';

    return this;
}


SqlMapContext.prototype.check = function () {
    this.currentSql = null;
    this.currentFile = '';

    for (var sqlId in this.sqlMap) {
        /** @type {SqlMapSql} */
        var sql = this.sqlMap[sqlId];
        var arr = [];
        for (var i = 0; i < sql.lines.length; i++) {
            /** @type {SqlMapSqlLine} */
            var sqlLine = sql.lines[i];
            // ignore empty entries
            var text = sqlLine.text.trim();
            if (text) {
                sqlLine.text = text;
                arr.push(sqlLine);
                // check if exist include sql
                if (sqlLine.type == SqlMapSqlLineType.INCLUDE) {
                    if (!this.sqlMap[sqlLine.text]) {
                        throw new Error("Included sql '" + sqlLine.text + "' not found!");
                    }
                }
            }
        }
        sql.lines = arr;
    }
}

exports.SqlMapSqlLineType = SqlMapSqlLineType;
exports.SqlMapSqlParamType = SqlMapSqlParamType;
exports.SqlMapSqlType = SqlMapSqlType;
exports.SqlMapSqlParam = SqlMapSqlParam;
exports.SqlMapSqlLine = SqlMapSqlLine;
exports.SqlMapSql = SqlMapSql;
exports.SqlMapContext = SqlMapContext;