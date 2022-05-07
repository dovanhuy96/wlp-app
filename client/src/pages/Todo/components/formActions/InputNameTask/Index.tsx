import React, { useState } from "react";
import { Form, Input } from 'antd';

const InputNameTask = () => {

    const [nameTodo, setNameTodo] = useState<string>('');

    const handleChangeName = (e: any) => {
        setNameTodo(e.target.value);
    }
    const handleSubmit = () => {
        console.log("11111");
        
    }

    return (
        <Form onFinish={handleSubmit}>
            <Input 
                placeholder="Enter name todo"
                onChange={(e) => {handleChangeName(e)}}
                value={nameTodo}
            />
        </Form>
    )
}
export default InputNameTask;