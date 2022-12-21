import './ModalAddParticipant.scss';
import Requirement from '../Requirement/Requirement';
import axios from "axios";
import React from 'react';

function ModalAddParticipant(props) {
    if (!props.showModalAddParticipant){
        return null;
    }
    else{
        return (
            <div className='modal' onClick={props.onClose}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-content'>
                        <div className='modal-title'> 
                            {props.titleModalAddParticipant}
                        </div>
                        <div className='modal-body'>
                            <textarea 
                                onChange={(event) => {props.setParticipantInput(event.target.value)}}
                                className="participant-input" type="text" placeholder='Почему вас стоит взять проект?'
                            /> 
                        </div>
                        <div className='modal-footer'>
                            <button className='button' onClick={props.addParticipant}>Отправить</button>
                            <button className='button' onClick={props.onClose}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ModalAddParticipant;