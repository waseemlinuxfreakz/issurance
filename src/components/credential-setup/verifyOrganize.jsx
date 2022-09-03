import React from 'react';

import verify from '../../assets/img/verify.svg';
function VerifyOrganize() {
    return ( 
        <div className="verify_org_pop_container">
            <div className="verify_org_pop_cont">
                <img src={verify} alt="verify" />
                <p>We need to verify your organization to be able to publish your credential model.</p>
                <a href="#" className="blackBtn Small">Verify Organization</a>
            </div>
        </div>
     );
}

export default VerifyOrganize;