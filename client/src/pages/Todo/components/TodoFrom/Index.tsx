import React, { useState } from "react";
import InputText from "../../../../components/commons/InputText/InputText";

const TodoForm = () => {
    const [nameTodo, setNameTodo] = useState<string>('')

    const onChangename = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameTodo(e.target.value)
    }

    return (
        <>
            <InputText 
                value={nameTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onChangename(e)}}
                placeholder={'Enter name Todo'}
            />
        </>
    )
}   
export default TodoForm