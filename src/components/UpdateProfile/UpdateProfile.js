import './UpdateProfile.scss';
import axios from "axios";
import React, { useState } from 'react';

function UpdateProfile(props) {
        

    if (!props.showUpdateProfile){
        return null;
    }
    else{
        
        return (
            <div className='modal' onClick={props.onClose}>
                <div className='modal-add-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-title'> 
                        Редактировать профиль
                    </div>
                    <div className='modal-body'>
                        <input 
                            onChange={(event) => {props.setUpdatePhone(event.target.value)}}
                            className="update-profile-input" type="text" value={props.updatePhone} placeholder={'телефон'}
                        /> 
                        <input 
                            onChange={(event) => {props.setUpdateEmail(event.target.value)}}
                            className="update-profile-input" type="text" value={props.updateEmail} placeholder={'почта'}
                        /> 
                    </div>
                    <div className='modal-footer'>
                        <button className='button' onClick={props.updateProfile}>Сохранить</button>
                        <button className='button' onClick={props.onClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default UpdateProfile;