import React from 'react';

import issuance from '../../assets/img/issuance.svg';
import HeaderSignup from '../../header-footer/header-signup';


function SignupFirst() {
    return ( 
        <div className='firstScreen'>
            <HeaderSignup/>
            <div className="sgnup-login_area signWrap">
                <div className="sgnup-login-container">
                    <div className="sgnup-login-text">
                        <img src={issuance} alt="issuance" />
                        <h1>Become a renowned trust anchor with Trudenty</h1>
                    </div>
                    <div className="sgnup-login-btn">
                        <a href="/signup-steep1" className="whiteBtn">Sign up </a>
                        <a href="#" className="blackBtn">Log in </a>
                    </div>
                </div>
                <div className="sgnup-login-footer text-center">
                    <p>By signing up, you agree to Trudenty’s <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
     );
}

export default SignupFirst;