import React from 'react';

import CredentionalTopNav from './credentialsetup-topnav';
import SideMenu from '../dashboard/dashboard-side-menu';

import Checked from '../../assets/img/check-circle.svg';
import PublishModelTop from './publishModelTop';
import ViewOrganization from './viewOrganization';
import VerifyOrganize from './verifyOrganize';


function PublishCredential() {
    return (
        <div className="dashboard_container ConfigureCredenPage credentialMenu">
            <div className="sideMenu ">
                <SideMenu />
            </div>
            <div className="dashboard_content">
                <CredentionalTopNav />
                <div className="credential_progress credentialSteep3">
                    <span className="credentialSteep credential1"><img src={Checked} />  Create a credential model</span>
                    <span className="credentialSteep credential2"><img src={Checked} />  Configure credentials</span>
                    <span className="credentialSteep credential3"><span>3</span>  Publish</span>
                </div>
                <div className="dashboad_mainCont">
                    <div className="CredentialPageCont publishModel">
                        <PublishModelTop />
                        <div className="api_container">
                            <div className="apiContainer">
                                <div className="testApi">
                                    <h2>Test API key</h2>
                                    <p>Trudenty APIs use your secret key to authenticate requests on your server. </p>
                                    <h4 className="apinote">Use this test key as you build your app. API calls return simulated credential verification.</h4>
                                    <a href="#" className="seeDoc">See Documentation</a>
                                </div>
                                <div className="testApiKeyCol">
                                    <div className="testApiKey">
                                        <div className="testApiKeyTitle">Test key</div>
                                        <div className="testapiCont">
                                            <p className="api">Pk test gIzF5C04XtGuyAAcG1nam31dzG04GzS2U67aXJuz2T 77211X9Nn7n0002G4</p>
                                            <div className="api_btns">
                                                <a href="#" className='generateBtn api_btn'>Generate</a>
                                                <a href="#" className='copyBtn api_btn'>Copy</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hooks_container">
                                <div className="row">
                                    <div className="col-md-6 hooksCol hooksCol2">
                                        <h2>Webhooks</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 hooksCol">
                                        <p>Enable your system to push your consumers backup data. Get notified automatically when a new event happens.</p>
                                        <h4 className="apinote">Create a webhook by entering your app or website’s URL where messages or payloads will be sent to.</h4>
                                    </div>
                                    <div className="col-md-6 hooksCol">
                                        <div className="enterWebUrl">
                                            <input type="url" name='weburl' id='weburl' placeholder='Enter your app or website’s URL' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ViewOrganization />
                            <VerifyOrganize/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublishCredential;