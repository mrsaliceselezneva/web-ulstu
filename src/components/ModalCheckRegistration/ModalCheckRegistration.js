import './ModalCheckRegistration.scss';
import React from 'react';

function ModalCheckRegistration(props) {

    if (!props.showModalCheckRegistration){
        return null;
    }
    else{
        
        return (
            <div className='registration-modal' onClick={props.onClose}>
                <div className='registration-modal-add-content' onClick={e => e.stopPropagation()}>
                    <div className='registration-modal-title'> 
                        {props.textCheckRegistration}
                    </div>
                    <div className='registration-modal-body'>
                    </div>
                    <div className='registration-modal-footer'>
                        <button className='registration-button' onClick={props.onClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default ModalCheckRegistration;