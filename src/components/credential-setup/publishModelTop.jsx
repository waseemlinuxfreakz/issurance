import React from 'react';

import Customer from '../../assets/img/customer.svg';
import Editcredential from './edit-credential';

function PublishModelTop() {
    return (
        <div className="configModelTop publishModelTop">
            <div className="selectCustomer">
                <div className="customerTitle">
                    <Editcredential/>
                    <div className="customerLabel">
                        Verify your customer’s identity as specified
                        by the selected country’s financial governing body.....
                    </div>
                </div>
            </div>
            <div className="configTopRight">
                <div className="testEnvironment">
                    <input type="checkbox" id='enviroment' />
                    <label htmlFor="enviroment">
                        <span className="checkEnvi"><span></span></span>
                        <span className="test">Test</span>
                        <span className="production">Production</span>
                    </label>
                    <div className="customerLabel">
                        Switch from Test to Production 
                        to publish credential model.
                    </div>
                </div>

                <a href="#" className="doneBtn" id='publish'>Publish</a>
            </div>
        </div>
    );
}

export default PublishModelTop;