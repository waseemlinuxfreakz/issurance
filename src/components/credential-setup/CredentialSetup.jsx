import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CredentionalTopNav from './credentialsetup-topnav';
import SideMenu from '../dashboard/dashboard-side-menu';
import CredentialTabs from './credential-tabs';

import Search from '../../assets/img/search.svg';

function CredentialSetup() {
    return (
        <div className="dashboard_container CredentialPage">
            <div className="sideMenu ">
                <SideMenu />
            </div>
            <div className="dashboard_content">
                <CredentionalTopNav />
                <div className="credential_progress credentialSteep1">
                    <span className="credentialSteep credential1"><span>1</span>  Create a credential model</span>
                    <span className="credentialSteep credential2"><span>2</span>  Configure credentials</span>
                    <span className="credentialSteep credential3"><span>3</span>  Publish</span>
                </div>
                <div className="dashboad_mainCont">
                    <div className="CredentialPageCont">
                        <div className="credentialModel">
                            <div className="electredentialText">
                                <h2>Select a Credential Model</h2>
                                <p>Start with a template or build a credential model from scratch.</p>
                            </div>
                            <div className="search-credential">
                                <form action="#">
                                    <button type='search'><img src={Search} alt="Search" /></button>
                                    <input type="search" placeholder='Search' />
                                </form>
                            </div>
                        </div>
                        <div className="credential_tab_box">
                            <CredentialTabs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CredentialSetup;