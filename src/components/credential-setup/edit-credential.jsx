import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import Customer from '../../assets/img/customer.svg';
import Pen from '../../assets/img/pen.svg';

function Editcredential() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <span className='d-content' variant="primary" onClick={handleShow}>
                <img src={Customer} alt="Customer" className="customerIcon" />
                <p>Know Your Customer </p>
            </span>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Credential Model</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="createFom">
                        <form action="#">
                            <div className="user_logocol">
                                <div className="userAvatar">
                                    <input type="file" name='avatar' id='avatar' />
                                    <label htmlFor="avatar">
                                        <span className='avatar_title'>a</span>
                                        <span className="editAvatar"><img src={Pen} alt="Pen" /></span>
                                    </label>
                                </div>
                                <div className="inputBox">
                                    <label htmlFor="CredentialName">Credential model name</label>
                                    <input type="text" name='CredentialName' id='CredentialName' placeholder='Give this credential a name.' value='Absa Internal Authentication' />
                                </div>
                            </div>
                            <div className="inputBox">
                                <label htmlFor="CredentialID">ID</label>
                                <input type="text" name='CredentialID' id='CredentialID' placeholder='ID' value='AbsaAuthentication' />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="Description">Description</label>
                                <textarea name="Description" id="Description">Absa internal authentication credential allowing passwordless authentication.</textarea>
                            </div>
                            <button className='createbtn' type='submit'>Save</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Editcredential;