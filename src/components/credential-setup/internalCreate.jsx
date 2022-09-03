import React from 'react';

import InternalBox from '../../assets/img/InternalBox.svg';

function InternalCreate() {
    return ( 
        <div className="internal_tab_content">
            <div className="internal_createBox text-center">
                <img src={InternalBox} alt="InternalBox" />
                <p>Build a custom built credential model from scratch.</p>
                <a href="#" className="blackBtn Small">Create</a>
            </div>
        </div>
     );
}

export default InternalCreate;