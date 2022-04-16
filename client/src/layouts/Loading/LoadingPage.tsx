import React from 'react';
import { FaReact } from 'react-icons/fa';
import { StyleLoading } from './Styles';

function LoadingPage() {
    return (
        <StyleLoading>
            <div className={'wrapper-loading'}>
                <FaReact className={'common-loading'} />
                <span className={'title-loading'}>loading...</span>
            </div>
        </StyleLoading>
    )
}

export default LoadingPage