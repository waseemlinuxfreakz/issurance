import React from 'react';

import Notification from '../../assets/img/notification.svg';


function DashboardTopNav() {
    return ( 
        <div className="dash-top-nav">
            <div className="top-nav-cont">
                <h2 className="page-title"> Dashboard </h2>
                <div className="top-nav-right">
                    <a href="#" className="create">Create</a>
                    <a href="#" className='notification'><img src={Notification} alt="Notification" /></a>
                    <a href="#" className="profileName">Z</a>
                </div>
            </div>
        </div>
     );
}

export default DashboardTopNav;