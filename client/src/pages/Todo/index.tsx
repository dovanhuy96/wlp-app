import React from 'react'
import ContainerTodo from './data';

import { StyleTodo } from './Style';

function Todo() {
    return (
        <StyleTodo className='wrapper-todo'>
            <ContainerTodo />
        </StyleTodo>
    )
}

export default Todo;