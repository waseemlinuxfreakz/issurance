import React from 'react';

function CreateInternalModel() {
    return ( 
        <div className="create_internal_model">
            <form action="#">
                <div className="modelName_creat">
                    <span className='namtag'>CM</span>
                    <input type="text" placeholder='Credential model name' />
                </div>
                <div className="modelName_desc">
                    <label htmlFor="modelDesc">Description</label>
                    <textarea name="modelDesc" id="modelDesc" placeholder='Optional' ></textarea>
                    <button className="createbtn">Create</button>
                </div>
            </form>
        </div>
     );
}

export default CreateInternalModel;