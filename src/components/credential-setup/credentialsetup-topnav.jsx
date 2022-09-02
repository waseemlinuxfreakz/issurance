import React from 'react';

import Notification from '../../assets/img/notification.svg';


function CredentionalTopNav() {
    return ( 
        <div className="dash-top-nav">
            <div className="top-nav-cont">
                <h2 className="page-title"> New Credential Model </h2>
                <div className="top-nav-right">
                    <a href="#" className="whiteBtn">Close</a>
                    <a href="#" className='notification'><img src={Notification} alt="Notification" /></a>
                    <a href="#" className="profileName">Z</a>
                </div>
            </div>
        </div>
     );
}

export default CredentionalTopNav;