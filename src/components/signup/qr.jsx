import React from 'react';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

function QrSignupFirst() {
    return (
        <div className='qr_inf_desc'><QRCode value="waseem" /></div>
    );
}
export default QrSignupFirst;