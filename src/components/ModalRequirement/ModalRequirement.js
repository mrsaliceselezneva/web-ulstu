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
            <div className='modal' onClick={props.onClose}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-content'>
                        <div className='modal-title'> 
                            {props.titleModalRequirement}
                        </div>
                        <div className='modal-body'>
                            {props.modalRequirements}
                        </div>
                        <div className='modal-footer'>
                            <button className='button' onClick={props.onClose}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ModalRequirement;