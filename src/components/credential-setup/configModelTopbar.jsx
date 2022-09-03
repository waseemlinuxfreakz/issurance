import React from 'react';

import Customer from '../../assets/img/customer.svg';
import Down from '../../assets/img/down.svg';
import nigeria from '../../assets/img/nigeria.png';
import southAfrica from '../../assets/img/southAfrica.png';
import dot from '../../assets/img/dot.svg';
import Editcredential from './edit-credential';



function ConfigModelTop() {
    return (
        <div className="configModelTop">
            <div className="selectCustomer">
                <div className="customerTitle">
                    <Editcredential/>
                    <div className="customerLabel">
                        Verify your customer’s identity as specified
                        by the selected country’s financial governing body.....
                    </div>
                </div>
                <div className="customer_drop_menu">
                    <img src={southAfrica} alt="Africa" />
                    <img src={Down} alt="Down" className="DownArrow" />
                    <div className="cutomer_drop">
                        <a href="#" className='countryItem active'><img src={southAfrica} alt="Africa" /> South Africa</a>
                        <a href="#" className='countryItem'><img src={nigeria} alt="Nigeria" /> Nigeria</a>
                    </div>
                </div>
            </div>
            <div className="configTopRight">
                <div className="setting_menu">
                    <img src={dot} alt="dot" className="dotted_icon" />
                    <div className="settingDrop">
                        <a href="#">Edit</a>
                        <a href="#">Settings</a>
                    </div>
                </div>
                <a href="/credential/publish-credentials" className='SaveBtn'>Save</a>
                <a href="#" className='doneBtn'>Done</a>
            </div>
        </div>
    );
}

export default ConfigModelTop;