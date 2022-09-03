import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CredentialPopip() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='credentialPop'>

            <a href="#" className='addNew' variant="primary" onClick={handleShow}><span>+</span>
                <div className="customerLabel">Create credential</div>
            </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Credential</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="createFom">
                        <form action="#">
                            <div className="inputBox">
                                <label htmlFor="CredentialName">Credential Name</label>
                                <input type="text" name='CredentialName' id='CredentialName' placeholder='Give this credential a name.' />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="Description">Description</label>
                                <textarea name="Description" id="Description"></textarea>
                            </div>
                            <button className='createbtn' type='submit'>Create</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CredentialPopip;