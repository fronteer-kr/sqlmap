var fs = require('fs');
var mysql = require('mysql');
var SqlMapLoader = require('./lib/loader/SqlMapLoader');
const { SqlMapSqlLineType } = require('./lib/parser/SqlMapSql');

global.sqlMap = {};

function SqlMap(masterConfig, slaveConfigs, poolClusterConfig) {
    this.poolCluster = mysql.createPoolCluster(poolClusterConfig);
    this.poolCluster.add('MASTER', masterConfig); // add a named configuration
    this.hasSlave = false;
    if (Array.isArray(slaveConfigs)) {
        for (var i = 0; i < slaveConfigs.length; i++) {
            this.poolCluster.add('SLAVE' + (i + 1), slaveConfigs[i]);
            this.hasSlave = true;
        }
    } else if (slaveConfigs instanceof Object) {
        this.poolCluster.add('SLAVE1', slaveConfigs);
        this.hasSlave = true;
    }
}

function querySql(SqlMap, sql, values, callback) {
    console.log(SqlMap.hasSlave ? 'Slave' : 'Master');
    var t1 = new Date();
    var pool = null;
    if (SqlMap.hasSlave) {
        pool = SqlMap.poolCluster.of('SLAVE*', 'RANDOM');
    } else {
        pool = SqlMap.poolCluster.of('*');
    }
    pool.query(sql, values, function (err, results, fields) {
        var self = this;
        if (err) {
            if (callback) callback(err);
            else throw err;
        } else {
            var t2 = new Date();
            console.error(self.sql);
            console.log('Time: ' + (t2.getUTCMilliseconds() - t1.getUTCMilliseconds()) + ' ms.');
            if (callback) {
                callback(null, results, fields);
            }
        }
    });
}

function getSqlAndValues(sqlId, values) {
    /** @type {SqlMapSql} */
    var sql = global.sqlMap[sqlId];
    if (!sql) throw new Error('Sql \'' + sqlId + '\' not found!');
    var strArr = [];
    var valueArr = [];
    for (var i = 0; i < sql.lines.length; i++) {
        /** @type {SqlMapSqlLine} */
        var line = sql.lines[i];
        if (line.type === SqlMapSqlLineType.STATIC) {
            strArr.push(line.text);
        }

        if (line.type === SqlMapSqlLineType.DYNAMIC) {
            var all = true;
            var varr = [];
            for (var j = 0; j < line.params.length; j++) {
                /** @type {SqlMapSqlParam} */
                var param = line.params[j];
                var value = values[param.name];
                if (value === undefined || value == null) {
                    all = false;
                    break;
                } else {
                    varr.push(value);
                }
            }
            if (all) {
                strArr.push(line.text);
                valueArr = valueArr.concat(varr);
            }
        }

        if (line.type === SqlMapSqlLineType.INCLUDE) {
            var ret = getSqlAndValues(line.text, values);
            strArr = strArr.concat(ret.sql);
            valueArr = valueArr.concat(ret.values);
        }
    }
    return { sql: strArr, values: valueArr };
}

SqlMap.prototype.query = function (sql, values, callback) {
    if (typeof sql !== 'string') throw new Error('Parameter \'sql\' requires a string!');
    querySql(this, sql, values, callback);
};

SqlMap.prototype.dQuery = function (sqlId, values, callback) {
    if (typeof sqlId !== 'string') throw new Error('Parameter \'sql\' requires a string!');
    /* eslint-disable */
    if (values && values !== new Object(values)) throw new Error('Parameter \'values\' requires an object or empty!');
    /* eslint-enable */
    console.log('Sql id: ' + sqlId);
    var params = getSqlAndValues(sqlId, values);
    var sql = params.sql.join(' ');
    console.error(sql);
    querySql(this, sql, params.values, callback);
};

SqlMap.prototype.destroy = function (callback) {
    this.poolCluster.end(callback);
};

SqlMap.loadSqlMaps = function (path, callback) {
    fs.stat(path, function (err, stat) {
        if (err) throw err;
        if (stat) {
            if (stat.isFile()) {
                SqlMapLoader.loadSqlMapFile(path, global.sqlMap, callback);
            }
            if (stat.isDirectory()) {
                SqlMapLoader.loadSqlMapDir(path, global.sqlMap, callback);
            }
        }
    });
}

module.exports = SqlMap;
