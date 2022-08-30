import React from 'react';

import logo from '../assets/img/logo-signup.svg';

function HeaderSignup() {
    return ( 
        <header id='signup-header'>
            <div className="header-contaienr">
                <div className="navBrand">
                    <a href="#"><img src={logo} alt="logo-signup.svg" /></a>
                </div>
            </div>
        </header>
     );
}

export default HeaderSignup;