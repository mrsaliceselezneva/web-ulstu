import './ModalAddParticipant.scss';
import Requirement from '../Requirement/Requirement';
import axios from "axios";
import React, { useState } from 'react';
import { produceWithPatches } from 'immer';

function ModalAddParticipant(props) {
    const [myProjectsList, setMyProjectsList] = useState([]);
    const [selectProject, setSelectProject] = useState('Проект не выбран');
        
    React.useEffect(() => {
        if (props.invite){
            axios
                .get(`${process.env.REACT_APP_API_URL}/project/my-projects`)
                .then((response) => {
                    setMyProjectsList(response.data);
                });

        }
    }, []);

    if (!props.showModalAddParticipant){
        return null;
    }
    else{
        
        return (
            <div className='modal' onClick={props.onClose}>
                <div className='modal-add-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-title'> 
                        {props.titleModalAddParticipant}
                    </div>
                    <div className='modal-body'>
                        {props.invite ? 
                            <div>
                                Выберите проект:
                                <div className='select-project'>{selectProject}</div>
                                <div className='my-projects-list'>
                                    {
                                        myProjectsList.map((requirement, id) => (
                                            <Requirement
                                                requirementText={requirement.name}
                                                setSelectProject={() => setSelectProject(requirement.name)}
                                            />
                                        ))
                                    }
                                </div>
                            </div> :null}
                        {props.preface}
                        <textarea 
                            onChange={(event) => {props.setParticipantInput(event.target.value)}}
                            className="participant-input" type="text" placeholder='Пару слов о ваших достоинствах'
                        /> 
                    </div>
                    <div className='modal-footer'>
                        <button className='button' onClick={props.addParticipant}>Отправить</button>
                        <button className='button' onClick={props.onClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default ModalAddParticipant;