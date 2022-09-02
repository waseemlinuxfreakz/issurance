import React from 'react';

import logo from '../assets/img/logo-signup.svg';

function HeaderLogin() {
    return ( 
        <header id='signup-header'>
            <div className="header-contaienr">
                <div className="navBrand">
                    <a href="#/"><img src={logo} alt="logo-signup.svg" /></a>
                </div>
                <div className="loginBtn">
                    <a href="/signup-steep1" className='logInBtn'>Sign Up</a>
                </div>
            </div>
        </header>
     );
}

export default HeaderLogin;