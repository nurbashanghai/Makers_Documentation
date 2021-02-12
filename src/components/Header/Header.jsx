import React from 'react';
import './Header.css';
import logo from "../../assets/img/logo-w1.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-logo">
                        <img src={logo} alt=""/>
                        <span>Documentation</span>
                    </div>
                    <div className="header-nav">
                        <div className="header-nav__inner">
                            <a href="">Главная</a>
                            <a href="">Документация</a>
                            <a href="">Добавить</a>
                            <input type="text" placeholder="Поиск"/>
                            <a href="">GitHub!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
