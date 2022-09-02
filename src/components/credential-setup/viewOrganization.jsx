import React from 'react';

import verify from '../../assets/img/verify.svg';

function ViewOrganization() {
    return ( 
        <div className="organizaContainer">
            <p><img src={verify} alt="verify" /> We need to verify your organization before you can publish your credential model.</p>
            <a href="#" className='verifyBtn'>Verify Organization</a>
        </div>
     );
}

export default ViewOrganization;