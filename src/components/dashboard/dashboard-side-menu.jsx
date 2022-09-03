import React from 'react';

import DashLogo from '../../assets/img/dashboard-logos.svg';
import Absa from '../../assets/img/absa.svg';
import Dots from '../../assets/img/dot.svg';


function SideMenu() {
    return ( 
        <div className="dashboard_menu_container">
            <a href="#" className='dashLogo'><img src={DashLogo} alt="Logo" /></a>
            <div className="sideMenu_box">
                <ul className="menu_list">
                    <li><a href="/dashboard" className='dashboard'>Dashboard</a></li>
                    <li><a href="credential" className='credential'>Credential Setup</a></li>
                    <li><a href="#">Issuer DIDs</a></li>
                    <li><a href="#">Ecosystem Management</a></li>
                </ul>
            </div>
            <span className='hr'></span>
            <div className="sideMenu_box">
                <ul className="menu_list">
                    <li><a href="#" className='disenable'>Team</a></li>
                    <li className="teamlist">
                        <span className='teamTitle teamColor1'>B</span>
                        <span className='teamTitle teamColor2'>U</span>
                        <span className='teamTitle teamColor3'>D</span>
                        <span className='teamTitle teamColor4'>L</span>
                        <span className="tenmore">+10 more</span>
                    </li>
                    <li><a href="#">Invite Member</a></li>
                    <li><a href="#">Team Settings</a></li>
                </ul>
            </div>
            <span className='hr'></span>
            <div className="sideMenu_box">
                <ul className="menu_list">
                    <li><a href="#" className='disenable'>Help & Resources</a></li>
                    <li><a href="#">Guides</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Developer Tools</a></li>
                </ul>
            </div>
            <div className="sideMenuFooter">
                <img src={Absa} alt="" className="absa" />
                <div className="foterVerify">
                    <span className='verifyTag'>Verify</span>
                    <div className="credentials_drop">
                        <div className="creaDropTitle">Absa Bank</div>
                        <div className="verifyPoLabel">
                            <p>Verify your organization to be able to publish credential models.</p>
                            <a href="#" className='doneBtn'>Verify</a>
                        </div>
                        <ul className="credentials_drop_list">
                            <li><a href="#">Billing</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
                <div className="verifyMenu">
                    <span className="verify-dot"><img src={Dots} alt="Dots" /></span>
                </div>
            </div>
        </div>
     );
}

export default SideMenu;
