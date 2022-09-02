import React from 'react';

import HeaderSignup from '../../header-footer/header-signup';
import SignupFooter from '../../header-footer/signup-footer';



function SignupSteep1() {
    return ( 
        <div className='steep-1 formSteepWrap'>
            <HeaderSignup/>
            <div className="sgnup-login_area signWrap">
                <div className="container">
                    <div className="signUpSteep signUpSteep1">
                        <div className="formSteepBox">
                            <span className="form_steepLabel">Step 1 of 4</span>
                            <h1>Enter your email</h1>
                            <form action="/signup-steep2">
                                <div className="form_inp">
                                    <label htmlFor="signupmail">What is your work email?</label>
                                    <input type="email" placeholder='name@example.com' name='signupmail' id='signupmail' />
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

export default SignupSteep1;