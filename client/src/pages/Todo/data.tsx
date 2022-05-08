import React from "react";
import TodoForm from "./components/TodoFrom/Index";
import { ColLeft, ColRight } from "./Style";

const ContainerTodo = () => {

    //this component get data from API

    return (
        <>
            <h3 className="">NEW TASK</h3>
            <ColLeft>
                <TodoForm />
            </ColLeft>
            <ColRight>

            </ColRight>
        </>
    )
}

export default ContainerTodo;