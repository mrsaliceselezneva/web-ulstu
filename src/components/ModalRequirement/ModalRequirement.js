import './ModalRequirement.scss';
import Requirement from '../Requirement/Requirement';
import axios from "axios";
import React from 'react';

function ModalRequirement(props) {
    if (!props.showModalRequirement){
        return null;
    }
    else{
        return (
            <div className='modal-requirement' onClick={props.onClose}>
                <div className='modal-requirement-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-requirement-content'>
                        <div className='modal-requirement-title'> 
                            {props.titleModalRequirement}
                        </div>
                        <div className='modal-requirement-body'>
                            {props.modalRequirements}
                        </div>
                        <div className='modal-requirement-footer'>
                            <button className='button' onClick={props.onClose}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ModalRequirement;