import React from 'react';
import { FaReact } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { App_Header } from './styleLayouts/StyleMain';


const AppHeader = () => {


    return (
        <App_Header className={'header d-flex flex-center-between'}>
            <div className="header-menu-mobile">
                <AiOutlineMenuUnfold
                    style={{
                        width: '28px',
                        height: '28px',
                        color: 'black'
                    }}
                />
            </div>
            <div className={'header-logo'}>
                <a href="/" className={'header-logo_link'}>
                    <FaReact
                        style={{

                        }}
                        className={'header-logo_icon'}
                    />
                </a>
                <span className={'header-logo_title'}>
                    No Pain - No Gain
                </span>
            </div>
            <div className={'header-content'}>
                <div className={'header-content-wrapper'}>
                    <div className={'header-search_icon'}></div>
                    <input
                        type={'text'}
                        placeholder={'Search...'}
                        className={'header-search_input'}
                    />
                </div>
            </div>
            <div className={'header-auth'}>
                <button className={'header-auth_action'}>
                    SignIn/SignUp
                </button>
            </div>
        </App_Header>
    );
}
export default AppHeader;