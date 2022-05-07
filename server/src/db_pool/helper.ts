/**
 *        @file helper.ts
 * @application wlp-app
 *     @summary Helper Class
 * @description Contains all DB helper functions.
 */

import MySQLPool from "./mysql_pool";
import * as config from '../config';


export class Helper {

    public static pool() {
        return new MySQLPool(config.dbConfig)
    }

    public static shallowCopy(source: any, target: any) {
        Object.keys(target).forEach((key) => {
            if (source[key] !== undefined) {
                target[key] = source[key]
            }
        })

        return target
    }
}
export default Helper