import React from 'react';

import HeaderSignup from '../../header-footer/header-signup';
import SignupFooter from '../../header-footer/signup-footer';

import QR from '../../assets/img/qr.png';
import Info from '../../assets/img/info.svg';
import Qrinfo from './qr';


function SignupSteep2() {
    return (
        <div className='steep-1 formSteepWrap'>
            <HeaderSignup />
            <div className="sgnup-login_area signWrap">
                <div className="container">
                    <div className="signUpSteep signUpSteep2">
                        <div className="formSteepBox">
                            <div className="w50">
                                <span className="form_steepLabel">Step 2 of 4</span>
                                <h1>Scan QR code</h1>
                                <br />
                                <p>On your mobile phone, open the camera or a QR code scanner and point to the code.</p>
                            </div>
                            <div className="qrcode_scan">
                                <div className="qrcode">
                                <Qrinfo />
                                    
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
            </div>
            <SignupFooter />
        </div>
    );
}

export default SignupSteep2;