/**
 *        @file interface.ts
 * @application wlp-app
 *     @summary Interface Classes
 * @description Define various interfaces used accross Application
 *  @interfaces - TokenExpire
 *              - TokenBody
 *              - CUserAuthInfoRequest
 *              - MulterRequest
 *              - SQLStatementInsert
 *              - SQLStatementUpdate
 */

export interface TokenExpire {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export interface TokenBody {
    success: boolean
    tokenBody?: any
    error?: Error
}

export interface SQLStatementInsert {
    columns: string
    param_ids: string
    param_values: Array<any>
}

export interface SQLStatementUpdate {
    columns: string
    param_values: Array<any>
}
