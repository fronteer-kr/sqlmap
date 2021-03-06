import { ConnectionConfig, PoolClusterConfig } from 'mysql';

export declare class SqlMap {
    constructor(masterConfig: ConnectionConfig, slaveConfigs?: ConnectionConfig, poolClusterConfig?: PoolClusterConfig);

    query(sql: string, values: any, callback: any): void;
    dQuery(sqlId: string, values: any, callback: any): void;
    destroy(callback: any): void;

    queryAsync(sql: string, values: any): any;
    dQueryAsync(sqlId: string, values: any): any;
    destroyAsync(): void;

    static loadSqlMaps(path: string): void;
    static loadSqlMapsAsync(path: string): void;
    static emitSql(sqlId: string, paramObject: any): any;
    static parse(input: string): any;
}

