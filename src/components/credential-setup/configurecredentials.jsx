import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CredentionalTopNav from './credentialsetup-topnav';
import SideMenu from '../dashboard/dashboard-side-menu';
import ConfigModelTop from './configModelTopbar';

import Checked from '../../assets/img/check-circle.svg';
import Search from '../../assets/img/search.svg';

import Customer from '../../assets/img/customer.svg';
import Name from '../../assets/img/name.svg';
import Date from '../../assets/img/date.svg';
import Identi from '../../assets/img/identi.svg';
import Address from '../../assets/img/residential.svg';
import Tax from '../../assets/img/tax.svg';




function ConfigureCredentials() {
    return (
        <div className="dashboard_container ConfigureCredenPage credentialMenu">
            <div className="sideMenu ">
                <SideMenu />
            </div>
            <div className="dashboard_content">
                <CredentionalTopNav />
                <div className="credential_progress credentialSteep2">
                    <span className="credentialSteep credential1"><img src={Checked} />  Create a credential model</span>
                    <span className="credentialSteep credential2"><span>2</span>  Create a credential model</span>
                    <span className="credentialSteep credential3"><span>3</span>  Create a credential model</span>
                </div>
                <div className="dashboad_mainCont">
                    <div className="CredentialPageCont configModel">
                        <ConfigModelTop />
                        <div className="newCreation_polContainer">
                            <div className="new_creation_poll">
                                <div className="creationPolTop">
                                    <p>Credential Pool</p>
                                    <span>13</span>
                                </div>
                                <div className="newPoolSearch search-credential">
                                    <form action="#">
                                        <button type='search'><img src={Search} alt="Search" /></button>
                                        <input type="search" placeholder='Search' />
                                    </form>
                                    <div className="sortDrop">
                                        <span>Sort </span>
                                        <div className="shortDorpMenu">
                                            <a href="#" className='active'>Alphabetically</a>
                                            <a href="#">Added</a>
                                            <a href="#">Not added</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="NewPoolResult">
                                    <div className="newpoollist">
                                        <div className="newpoolResBox">
                                            <h4>Name</h4>
                                            <p>Signing up by scanning a QR code is our way of introducing you to the </p>
                                            <a href="#" className='addedBtn'>Added</a>
                                        </div>
                                        <div className="newpoolResBox">
                                            <h4>Date of Birth</h4>
                                            <p>Signing up by scanning a QR code is our way of introducing you to the </p>
                                            <a href="#" className='addedBtn'>Added</a>
                                        </div>
                                        <div className="newpoolResBox">
                                            <h4>Identification Number</h4>
                                            <p>Signing up by scanning a QR code is our way of introducing you to the </p>
                                            <a href="#" className='addedBtn'>Added</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="newCretionDetails">
                                <div className="echo_tabl_box">
                                    <table className='echoTable'>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" /></th>
                                                <th>Credential</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <div className="model_name">
                                                        <img src={Name} alt="Name" />
                                                        <p>Name</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div className="model_name">
                                                        <img src={Identi} alt="Identi" />
                                                        <p>Identification Number</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <div className="model_name">
                                                        <img src={Address} alt="Address" />
                                                        <p>Residential Address</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>
                                                    <div className="model_name">
                                                        <img src={Address} alt="Address" />
                                                        <p>Residential Address</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>
                                                    <div className="model_name">
                                                        <img src={Tax} alt="Tax" />
                                                        <p>Tax Number</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfigureCredentials;