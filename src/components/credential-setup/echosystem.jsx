import React from 'react';

import Anti from '../../assets/img/anti-money.svg';
import Customer from '../../assets/img/customer.svg';
import Name from '../../assets/img/name.svg';
import Date from '../../assets/img/date.svg';
import Identi from '../../assets/img/identi.svg';

function EchoSystem() {
    return ( 
        <div className="echo_tabl_box">
            <table className='echoTable'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Model Name</th>
                        <th>Credentials</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <a href='/credential/configure-credentials' className="model_name">
                                <img src={Customer} alt="Customer" />
                                <p>Know Your Customer</p>
                                <div className="customerLabel">
                                    Verify your customer’s identity as specified by the selected country’s financial governing body.
                                </div>
                            </a>
                        </td>
                        <td>
                            <div className="credentials_number">
                                <span>6</span>
                                <div className="credentials_drop">
                                    <div className="creaDropTitle">Credentials</div>
                                    <ul className="credentials_drop_list">
                                        <li>Sanctions Screening</li>
                                        <li>Adverse Media</li>
                                        <li>Politically Exposed Persons (PEP)</li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <a href='/credential/configure-credentials' className="model_name">
                                <img src={Anti} alt="Customer" />
                                <p>Anti-Money Laundering Module</p>
                                <div className="customerLabel">
                                    Verify your customer’s identity as specified by the selected country’s financial governing body.
                                </div>
                            </a>
                        </td>
                        <td>
                            <div className="credentials_number">
                                <span>3</span>
                                <div className="credentials_drop">
                                    <div className="creaDropTitle">Credentials</div>
                                    <ul className="credentials_drop_list">
                                        <li>Sanctions Screening</li>
                                        <li>Adverse Media</li>
                                        <li>Politically Exposed Persons (PEP)</li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default EchoSystem;