import React from 'react';

function CredentionOverviewNotIssue() {
    return ( 
        <div className="credention_box notIssueBox">
            <div className="creden_top">
                <div className="not_issue">
                    Not Issued
                </div>
            </div>
            <ul>
                <li>Name</li>
                <li>Identification Number</li>
                <li>Date of Birth</li>
                <li>Residential Address</li>
                <li>Tax Number</li>
                <li>Credit Score</li>
            </ul>
            <a href="#" className="white_Btn">Setup</a>
        </div>
     );
}

export default CredentionOverviewNotIssue;