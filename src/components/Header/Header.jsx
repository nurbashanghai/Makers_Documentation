import React from 'react';
import logo from "../../assets/img/logo-w1.svg";
import {Link, useHistory} from "react-router-dom";

const Header = () => {

    let history = useHistory();
    let user = {
        account: 'login'
    };

    if(JSON.parse(localStorage.getItem('currentUser'))){
        user = JSON.parse(localStorage.getItem('currentUser'));
    } else {
        history.push('/login')
    }

    return (
        <div className="header col-12 d-flex" style={{backgroundColor: 'black', color: 'white'}}>
            <div className="container">
                <div className="header-inner">
                    <div className="header-logo p-3">
                        <img src={logo} alt=""/>
                        <span>Documentation</span>
                    </div>
                    <div className="header-nav d-flex flex-wrap justify-content-between" >
                            <Link className={'p-2'} style={{color: 'white'}} to={'/'}>Главная</Link>
                            <a className={'p-2'} style={{color: 'white'}} href="">Документация</a>
                            <a className={'p-2'} style={{color: 'white'}} href="">Добавить</a>
                            <a className={'p-2'} style={{color: 'white'}} href="">GitHub</a>
                            <p className={'p-2'} >Hello {user.account}</p>
                            <p className={'p-2'} onClick={() => {
                                localStorage.clear();
                                window.location.reload();
                                return false;
                            }} >Выход</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
