import React from 'react';
import './Header.css';
import logo from "../../assets/img/logo-w1.svg";
// import { useHistory } from "react-router-dom";
// let history = useHistory();

const Header = () => {

    // let user;
    //
    let user = JSON.parse(localStorage.getItem('currentUser'));
    //     user = JSON.parse(localStorage.getItem('currentUser'));
    // } else {
    //     history.push('/login')
    // }


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
                            <a>Hello {user.account}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
