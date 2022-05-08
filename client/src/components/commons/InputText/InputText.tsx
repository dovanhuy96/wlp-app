import React, { useState } from "react";
import { Form, Input } from 'antd';
import { IPropsInputText } from "./Type";

const InputText = (props: IPropsInputText) => {
    
    const {
        value = '',
        placeholder = '',
        style = {},
        wrapperClass = '',
        type = 'text',
        disabled = false,
        onChange = () => {},
        onClick= () => {}

    } = props;


    const handleChangevalue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(e);
    }
    const handleClickInput = (e: any) => {
        onClick(e);
    }

    return (
        <div className={wrapperClass} style={{...style}}>
            <span onClick={handleClickInput}>
                <Input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChangevalue}
                    disabled={disabled}
                />
            </span>
        </div>
    )
}
export default InputText