
function SqlMapHelper() {
}

SqlMapHelper.getSqlFunctionName = function (sqlTypeName, sqlId) {
    return sqlTypeName + '_' + sqlId.replace(/\./g, '_dot_');
}

SqlMapHelper.generateFunctionDeclare = function (sqlTypeName, sqlId) {
    return 'global.sqlMap.' +
        SqlMapHelper.getSqlFunctionName(sqlTypeName, sqlId) +
        ' = function (_paramObject, _sqlArr, _values) ';
}

SqlMapHelper.generateSqlLineDeclare = function (paramNames, tabIndex) {
    var b = paramNames.length === 0;
    for (var i = 0; i < paramNames.length; i++) {
        if (paramNames[i].match(/(@@)|(\$\$)/)) {
            b = true;
            break;
        }
    }
    if (b) return '';
    var arr = [];
    for (var i = 0; i < paramNames.length; i++) {
        arr.push(SqlMapHelper.replaceParam(paramNames[i]));
    }
    return SqlMapHelper.indent(tabIndex) +
        'if (' + arr.join(' || ') + ') ';
}

SqlMapHelper.generateTextNodeCall = function (text, tabIndex) {
    return SqlMapHelper.indent(tabIndex) +
        // 'SqlMapHelper.processTextNodeString(\'' +  text.trim() + ' \', _sqlArr);\n';
        'SqlMapHelper.processTextNodeString(\"' +  text.trim() + ' \", _sqlArr);\n';
}

SqlMapHelper.generateParamNodeCall = function (text, tabIndex) {
    return SqlMapHelper.indent(tabIndex) +
        'SqlMapHelper.processParamNodeString(\'' +
        SqlMapHelper.getParamText(text) + ' \', ' +
        SqlMapHelper.replaceParam(text) +
        ', _sqlArr, _values);\n';
}

SqlMapHelper.generateIncludeNodeCall = function (sqlId, tabIndex) {
    return SqlMapHelper.indent(tabIndex) +
        'SqlMapHelper.processIncludeNodeString(\'' + sqlId +
        '\', _paramObject, _sqlArr, _values);\n';
}

SqlMapHelper.generateIfDeclare = function (text, tabIndex) {
    return SqlMapHelper.indent(tabIndex) +
        'if (' + SqlMapHelper.replaceParam(text) + ') ';
}

SqlMapHelper.generateOpenBrace = function (tabIndex) {
    return '{\n';
}

SqlMapHelper.generateCloseBrace = function (tabIndex) {
    return SqlMapHelper.indent(tabIndex) + '}\n';
}

SqlMapHelper.generateForDeclare = function (text, tabIndex) {
    return SqlMapHelper.indent(tabIndex) +
        'for (' + SqlMapHelper.replaceParam(text) + ') ';
}

SqlMapHelper.replaceParam = function (text) {
    return text.replace(/[@$]$/, '').replace(/@@?/g, '_paramObject.');
}

SqlMapHelper.getParamText = function (text) {
    return text.match(/[@$]$/) ? '??' : '?';
}

SqlMapHelper.indent = function (tabIndex) {
    return '    '.repeat(tabIndex);
}

SqlMapHelper.processTextNodeString = function (text, _sqlArr) {
    if (!text.match(/^\s*$/)) _sqlArr.push(text);
}

SqlMapHelper.processParamNodeString = function (text, _paramObject, _sqlArr, _values) {
    _sqlArr.push(text);
    _values.push(_paramObject);
}

SqlMapHelper.processIncludeNodeString = function (sqlId, _paramObject, _sqlArr, _values) {
    var func = SqlMapHelper.getSqlFunction(sqlId);
    if (func) func(_paramObject, _sqlArr, _values);
    else throw new Error('Sql map \'' + sqlId + '\' not found!');
}

SqlMapHelper.getSqlFunction = function (sqlId) {
    var sqlTypeNames = ['select', 'insert', 'update', 'delete', 'sql'];
    for (var i = 0; i < sqlTypeNames.length; i++) {
        var funcName = SqlMapHelper.getSqlFunctionName(sqlTypeNames[i], sqlId);
        var func = global.sqlMap[funcName];
        if (func) return func;
    }
    return null;
}

global.sqlMap = {};

exports.SqlMapHelper = SqlMapHelper;
