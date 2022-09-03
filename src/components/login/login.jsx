import React from 'react';

import SignupFooter from '../../header-footer/signup-footer';
import HeaderLogin from '../../header-footer/header-login';


import QR from '../../assets/img/qr.png';
import Info from '../../assets/img/info.svg';
import AppBanar from '../../assets/img/app-banar.png';

function LogIn() {
    return (
        <div className='steep-1 formSteepWrap'>
            <HeaderLogin />
            <div className="sgnup-login_area signWrap">
                <div className="container">
                    <div className="signUpSteep LogIn">
                        <div className="formSteepBox">
                            <div className="w50">
                                <h1>Login by scanning QR code</h1>
                                <br />
                                <p>On your mobile phone, open the camera or a QR code scanner and point to the code..</p>
                            </div>
                            <div className="qrcode_scan">
                                <div className="qrcode">
                                    <img src={QR} alt="qr" />
                                </div>
                                <div className="qr-inf">
                                    <img src={Info} alt="Info" />
                                    <p>Why do I need to do this?</p>
                                    <p>Signing up by scanning a QR code is our way of introducing you to the world of credential issuing and verification. This simple process...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banar_container container">
                    <div className="app_banar">
                        <img src={AppBanar} alt="App Banar" />
                    </div>
                </div>
            </div>
            <SignupFooter />
        </div>
    );
}

export default LogIn;