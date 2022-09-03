import React from 'react';

import Customer from '../../assets/img/customer.svg';
import Name from '../../assets/img/name.svg';
import Date from '../../assets/img/date.svg';
import Identi from '../../assets/img/identi.svg';
import Address from '../../assets/img/residential.svg';
import Tax from '../../assets/img/tax.svg';
import Dots from '../../assets/img/dual-dot.svg';


function NewPoolList() {
    return (
        <div className="echo_tabl_box newpoollist-table">
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
                        <td className='table_desc_col'>
                            <div className="table_desc_col">
                                <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                <a href="#" className="removeLine"><span>Remove</span> <img src={Dots} alt="Dots" /></a>
                            </div>
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
                        <td className='table_desc_col'>
                            <div className="table_desc_col">
                                <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                <a href="#" className="removeLine"><span>Remove</span> <img src={Dots} alt="Dots" /></a>
                            </div>
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
                        <td className='table_desc_col'>
                            <div className="table_desc_col">
                                <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                <a href="#" className="removeLine"><span>Remove</span> <img src={Dots} alt="Dots" /></a>
                            </div>
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
                        <td className='table_desc_col'>
                            <div className="table_desc_col">
                                <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                <a href="#" className="removeLine"><span>Remove</span> <img src={Dots} alt="Dots" /></a>
                            </div>
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
                        <td className='table_desc_col'>
                            <div className="table_desc_col">
                                <p className="table_desc">Signing up by scanning a QR code is our way of introducing you to the </p>
                                <a href="#" className="removeLine"><span>Remove</span> <img src={Dots} alt="Dots" /></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NewPoolList;