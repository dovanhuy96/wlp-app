/**
 *        @file helper.ts
 * @application wlp-app
 *     @summary Helper Class
 * @description Contains all DB helper functions.
 */


export class Helper {

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