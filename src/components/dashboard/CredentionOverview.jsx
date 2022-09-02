import React from 'react';

import close_creden from '../../assets/img/close.svg';

function CredentionOverview() {
    return ( 
        <div className="credention_box">
            <div className="creden_top">
                <div className="creden_title">
                    Credential Overview
                    <img src={close_creden} className='close_creden' alt="close_creden" />
                </div>
                <div className="issue_green">
                    Issued
                </div>
            </div>
            <ul>
                <li>Name</li>
                <li>Identification Number</li>
                <li>Date of Birth</li>
                <li>Residential Address</li>
                <li>Tax Number</li>
                <li>Credit Score</li>
            </ul>
            <a href="#" className="white_Btn">Manage</a>
        </div>
     );
}

export default CredentionOverview;