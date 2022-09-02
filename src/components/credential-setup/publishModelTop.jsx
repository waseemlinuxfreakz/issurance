import React from 'react';

import Customer from '../../assets/img/customer.svg';

function PublishModelTop() {
    return (
        <div className="configModelTop publishModelTop">
            <div className="selectCustomer">
                <div className="customerTitle">
                    <img src={Customer} alt="Customer" className="customerIcon" />
                    <p>Know Your Customer </p>
                </div>
            </div>
            <div className="configTopRight">
                <div className="testEnvironment">
                    <input type="checkbox" id='enviroment' />
                    <label htmlFor="enviroment">
                        <span className="checkEnvi"><span></span></span>
                        Test environment
                    </label>
                    <div className="customerLabel">
                        Switch to the live environment
                        to publish credential model.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublishModelTop;