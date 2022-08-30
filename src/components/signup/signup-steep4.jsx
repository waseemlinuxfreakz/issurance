import React from 'react';

import Accordion from 'react-bootstrap/Accordion';

import HeaderSignup from '../../header-footer/header-signup';
import SignupFooter from '../../header-footer/signup-footer';

import Info from '../../assets/img/info.svg';
import Addicon from '../../assets/img/addicon.svg';



function SignupSteep4() {
    return ( 
        <div className='steep-1 formSteepWrap'>
            <HeaderSignup/>
            <div className="sgnup-login_area signWrap">
                <div className="container">
                    <div className="signUpSteep signUpSteep4">
                        <div className="formSteepBox">
                            <span className="form_steepLabel">Step 3 of 4</span>
                            <h1>Enter your email</h1>
                            <form action="#">
                                <div className="form_inp">
                                    <label htmlFor="companysName">What is your organization or company’s name?</label>
                                    <input type="text" placeholder='Enter your organization’s name' name='companysName' id='companysName' />
                                </div>
                                <button className="form_steepBtn">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container mt-auto">
                    <div className="accordianBox">
                        <div className="accordTitle colW">
                            <img src={Info} className='infoIcon' alt="Info" />
                            <p>Why do I need to do this?</p> 
                            <img src={Addicon} alt="" className="addIcon" />
                        </div>
                    </div>
                </div>
            </div>
            <SignupFooter/>
        </div>
     );
}

export default SignupSteep4;