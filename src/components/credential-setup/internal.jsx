import React from 'react';

import Anti from '../../assets/img/anti-money.svg';
import Customer from '../../assets/img/customer.svg';
import Name from '../../assets/img/name.svg';
import Date from '../../assets/img/date.svg';
import Identi from '../../assets/img/identi.svg';

import Absaint from '../../assets/img/absaint.svg';
import New from '../../assets/img/create-new.svg';


function Internal() {
    return ( 
        <div className="echo_tabl_box enternal">
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
                            <div className="model_name">
                                <img src={Absaint} alt="Customer" />
                                <p>Absa Internal Authentication</p>
                            </div>
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
                        <td></td>
                        <td colspan="2">
                            <div className="create_new">
                                <img src={New} alt="new" />
                                New Credential Model
                                <a href="/credential/create-internal-model" className='createNew'>Create</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Internal;