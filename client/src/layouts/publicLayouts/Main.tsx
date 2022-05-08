import React, { useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { listMenuItem } from '../../constants/MenuItem';

import {
    App_Content,
    App_SideBar,
    App_WithSideBar,
    App_Wrapper,
} from "./styleLayouts/StyleMain";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Main: React.FC = ({ children }) => {
    const [menuItem, setMenuItem] = useState<any>([]);

    useEffect(() => {
        const newMenu = listMenuItem();
        if (newMenu.length) {
            setMenuItem(newMenu);
        }
    }, []);

    const handleRenderMenu = () => {
        return (
            <App_SideBar className={'sidebar'}>
                <div className="sidebar-wrapper">
                    {
                        (menuItem && menuItem.length) ? (
                            <Menu>
                                {menuItem.map((item: any, key: any) => {
                                    return (
                                        <Menu.Item 
                                            key={`menu_${key}`}
                                            icon={<img className="" src={item.icon} style={{height: '20px', width: '20px'}} />}
                                        >
                                            <Link to={item.to}>
                                                {item.title}
                                            </Link>
                                        </Menu.Item>
                                    );
                                })}
                            </Menu>
                        ) : ('') 
                    }
                </div>
            </App_SideBar>
        );
    }
    
    return (
        <App_Wrapper>
            <AppHeader />
            <App_WithSideBar>
                {handleRenderMenu()}
                <App_Content>
                    {children}
                </App_Content>
            </App_WithSideBar>
            <AppFooter />
        </App_Wrapper>
    );
};
export default Main
