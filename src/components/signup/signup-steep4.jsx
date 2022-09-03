import React from 'react';

import HeaderSignup from '../../header-footer/header-signup';
import SignupFooter from '../../header-footer/signup-footer';




function SignupSteep4() {
    return ( 
        <div className='steep-1 formSteepWrap'>
            <HeaderSignup/>
            <div className="sgnup-login_area signWrap enterOrganize">
                <div className="container">
                    <div className="signUpSteep signUpSteep4">
                        <div className="formSteepBox">
                            <span className="form_steepLabel">Step 3 of 4</span>
                            <h1>Enter an organization</h1>
                            <form action="/signup-steep2">
                                <div className="form_inp">
                                    <label htmlFor="companysName">What is your organization or company’s name?</label>
                                    <input type="text" placeholder='Enter your organization’s name' name='companysName' id='companysName' />
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

export default SignupSteep4;