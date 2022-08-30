import React from 'react';

import HeaderSignup from '../../header-footer/header-signup';
import SignupFooter from '../../header-footer/signup-footer';



function SignupSteep3() {
    return ( 
        <div className='steep-1 formSteepWrap'>
            <HeaderSignup/>
            <div className="sgnup-login_area signWrap">
                <div className="container">
                    <div className="signUpSteep signUpSteep3">
                        <div className="formSteepBox">
                            <span className="form_steepLabel">Step 3 of 4</span>
                            <h1>Enter your email</h1>
                            <form action="#">
                                <div className="form_inp">
                                    <label htmlFor="firstName">What is your full name?</label>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" placeholder='First Name' name='firstName' id='firstName' />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder='Last Name' name='lastName' id='lastName' />
                                        </div>
                                    </div>
                                </div>
                                <button className="form_steepBtn">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <SignupFooter/>
        </div>
     );
}

export default SignupSteep3;