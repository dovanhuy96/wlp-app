import React from "react";
import { App_Footer } from "./styleLayouts/StyleMain";

const AppFooter = () => {
    return (
        <App_Footer className={'footer'}>
            <div className="wrapper-footer">
                <div className="footer_top">
                    <div className="footer_top-sub">1</div>
                    <div className="footer_top-sub">2</div>
                    <div className="footer_top-sub">3</div>
                    <div className="footer_top-sub">4</div>
                    <div className="footer_top-sub">5</div>
                </div>
                <div className="footer_bottom">
                    <ul className="footer_bottom-sub">
                        <li className="footer_bottom-sub_item">
                            PHP
                        </li>
                    </ul>
                    <ul className="footer_bottom-sub">
                        <li className="footer_bottom-sub_item">
                            Javascript
                        </li>
                    </ul>
                    <ul className="footer_bottom-sub">
                        <li className="footer_bottom-sub_item">
                            .NetCore3
                        </li>
                    </ul>
                    <ul className="footer_bottom-sub">
                        <li className="footer_bottom-sub_item">
                            Python3
                        </li>
                    </ul>
                    <ul className="footer_bottom-sub">
                        <li className="footer_bottom-sub_item">
                            Reactjs
                        </li>
                    </ul>
                </div>
            </div>
        </App_Footer>
    );
}
export default AppFooter;