import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import Echo from '../../assets/img/echo.svg';
import InternalImg from '../../assets/img/internal.svg';
import EchoSystem from './echosystem';
import Internal from './internal';





function CredentialTabs() {
    return (
        <div className="CredentialTabsBox">
            <form action="#">
                <Tab.Container id="CredentialTabs" defaultActiveKey="ecosystem">
                    <div>
                        <Nav variant="pills" className="CredentialNav">
                            <Nav.Item>
                                <Nav.Link eventKey="ecosystem">
                                    <div className="tab_title">
                                        <img src={Echo} alt="Echo" /> Ecosystem
                                    </div>
                                    <p>Choose or edit popular model types for your client base.</p>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="internal">
                                    <div className="tab_title">
                                        <img src={InternalImg} alt="Echo" /> Internal
                                    </div>
                                    <p>Create or edit a custom built model for specific purposes.</p>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className=''>
                        <Tab.Content>
                            <Tab.Pane eventKey="ecosystem">
                                <EchoSystem/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="internal">
                               <Internal/>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </form>
        </div>
    );
}

export default CredentialTabs;