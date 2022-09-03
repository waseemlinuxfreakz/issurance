import React from 'react';

import Draganddrop from '../../assets/img/draganddrop.svg';


function AddNewPool() {
    return ( 
        <div className="addNewPoolContainer">
            <div className="newPoolBox">
                <img src={Draganddrop} alt="Draganddrop" />
                <p>Add or drag a credential here from the  <br />pool on the left.</p>
            </div>
        </div>
     );
}

export default AddNewPool;