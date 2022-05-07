/**
 *        @file user.ts
 * @application wlp-app
 *     @summary User Class
 * @description Defines the structure for Todo model
 */

import { Common } from './common'
import Helper from '../db_pool/helper'
import { NullableBoolean, NullableNumber, NullableString } from '../typings/types'

/**
 * User class (instances throughout code as cUser)
 *
 * This class is instantiated for each endpoint call and contains information about the user and
 * session associated with the endpoint call.
 *
 * @class User
 */

export class Todo extends Common {
    public name: NullableString = undefined

    constructor(model?: any) {
        super()
        if (model) {
            Helper.shallowCopy(model, this)
        }
    }
}

export default Todo
