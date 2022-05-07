import React from "react";
import InputNameTask from "./components/formActions/InputNameTask/Index";
import { ColLeft, ColRight } from "./Style";

const ContainerTodo = () => {
    return (
        <>
            <h3 className="">NEW TASK</h3>
            <ColLeft>
                <InputNameTask
                    
                />
            </ColLeft>
            <ColRight>

            </ColRight>
        </>
    )
}

export default ContainerTodo;