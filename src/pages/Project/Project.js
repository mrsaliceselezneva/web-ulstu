import axios from "axios";
import React, { useState } from 'react';
import './Project.scss';
import Requirement from '../../components/Requirement/Requirement';
import DeleteProject from '../../components/DeleteProject/DeleteProject';
import ListBlock from '../../components/ListBlock/ListBlock';
import Commit from '../../components/Commit/Commit';
import defaultBackground from '../../components/assets/images/default_project_background.png';
import { FiUser, FiCalendar, FiUserPlus, FiCheckSquare, FiPlusCircle, FiXCircle, FiEdit } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

function Project(){
    const {email, token} = useSelector(state => state.userReducer);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [authorEmail, setAuthorEmail] = useState('');

    const [requirementsList, setRequirementsList] = useState([]);
    const [participants, setParticipants] = useState([]);
    const [commits, setCommits] = useState([]);

    const [requirementInput, setRequirementInput] = useState('');
    const [commitInput, setCommitInput] = useState('');
    const [participantInput, setParticipantInput] = useState('');

    let { search } = useLocation();
    const params = new URLSearchParams(search);
    const projectId = params.get('id');

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/project/?id=${projectId}`)
            .then((response) => {
                setName(response.data.name);
                setDescription(response.data.description);
                setAuthor(`${response.data.author.lastName} ${response.data.author.firstName[0]}.${response.data.author.patronymic[0]}.`);
                setAuthorEmail(response.data.author.email);
                setRequirementsList(response.data.competences);
                setParticipants(response.data.projectParticipants);
                setCommits(response.data.projectStates);
            });
    }, []);

    function addRequirement() {
        console.log('add-requirement');
        
    }

    function addCommit() {
        console.log('add-commit');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        var data = {
            completed: true,
            isCompleted: true,
            pointTitle: commitInput,
            projectId: projectId,
        };
        axios
        .post(`${process.env.REACT_APP_API_URL}/project/state`, data, { headers })
        .then((response) => {
            window.location.reload();
        })
        .catch((error) => {
        });
    }

    function addParticipant() {
        console.log('add-participant');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        var data = {
            comment: participantInput,
            projectId: projectId,
        };
        axios
        .post(`${process.env.REACT_APP_API_URL}/project/response`, data, { headers })
        .then((response) => {
            
        })
        .catch((error) => {
            console.log(error);
        });
    }

    function deleteRequirement() {
        console.log('delete-requirement');
    }

    function deleteCommit(commit) {
        console.log('delete-commit');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const data = {ids: commit.id}
        axios
        .delete(`${process.env.REACT_APP_API_URL}/project/state?ids=${commit.id}`, { headers })
        .then((response) => {
            window.location.reload();
        })
        .catch((error) => {
        });
    }

    function deleteParticipant() {
        console.log('delete-participant');
    }

    function deleteProject(){
        console.log('delete-project');
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
          .delete(`${process.env.REACT_APP_API_URL}/project?ids=${projectId}`, { headers })
          .then((response) => {
            window.location.assign(`${process.env.REACT_APP_URL}/projects`);
          })
          .catch((error) => {
          });
    }

    return (
        <div className='project'>
            <div className='main'>
                <div className='main-top-section'>
                    <img src={defaultBackground} className='image' alt='defaultBackground' />
                    <div className='info'>
                        <div className='name'>{name}</div>
                        <Requirement
                            icon={<FiUser className='requirement-icon-user' />}
                            requirementText={author}
                        />
                        <Requirement
                            icon={<FiCalendar className='requirement-icon-date' />}
                            requirementText={"01.01.2023"}
                        />
                        {authorEmail === email ? 
                            <DeleteProject
                                icon={<FiXCircle className='project-icon-date' />}
                                deleteText={"удалить проект"}
                                onClick={() => deleteProject()}
                            />
                            :
                            <></>
                        }
                        <div className='description'>
                            {description}
                        </div>
                    </div>
                </div>
                <div className='main-bottom-section'>
                    <div className='requirements-section'>
                        <div className='requirements-title'>
                            Требования
                            {authorEmail === email ? 
                                <div className='input-block-project'>
                                    <input 
                                        onChange={(event) => {
                                        setRequirementInput(event.target.value);
                                        }}
                                        className="input" type="text" placeholder='требования'
                                    />
                                    <FiPlusCircle className='icon-add-block' onClick={() => addRequirement()} /> 
                                </div>: 
                                <></>
                            }
                        </div>
                        <div className='requirements-list'>
                            {
                                requirementsList.map((requirement, id) => (
                                    <Requirement
                                        requirementText={requirement}

                                        del={authorEmail === email ?
                                            <FiXCircle  onClick={() => deleteRequirement()} /> :
                                            <></>
                                        }
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='commits-list'>
                        <div className='commits-title'>
                            Состояние проекта
                            {authorEmail === email ? 
                                <div className='input-block-project'>
                                    <input 
                                        onChange={(event) => {
                                        setCommitInput(event.target.value);
                                        }}
                                        className="input" type="text" placeholder='статус'
                                    /> 
                                    <FiPlusCircle className='icon-add-block' onClick={() => addCommit()} /> 
                                </div>: 
                                <></>
                            }
                        </div>
                        {
                            commits.map((commit, id) => (  
                                <Commit 
                                    icon={<FiCheckSquare className='commit-icon'/>} 
                                    listBlockText={commit.pointTitle} 
                                    del={authorEmail === email ? 
                                        <FiXCircle className='icon-delete' onClick={() => deleteCommit(commit)} /> : 
                                    <></>                  
                                    }
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='participants'>
                {
                    authorEmail !== email ?
                    <div className='participants-title2'>
                        <div className="add-title">
                            Участники
                            <FiUserPlus className='icon-add-participant' onClick={() => addParticipant()} />
                        </div>
                        <textarea 
                            onChange={(event) => {
                                setParticipantInput(event.target.value);
                            }}
                            className="participant-input" type="text" placeholder='почему вас стоит взять проект?'
                        />
                    </div> :
                    <div className='participants-title'>
                        Участники
                    </div> 
                }
                <div className='participants-list'>
                    <ListBlock
                        icon={<FiUser className='list-block-icon' />}
                        listBlockText={author}
                        del={<></>}
                    />
                    {
                        participants.map((participant, id) => (
                            <ListBlock
                                icon={<FiUser className='list-block-icon' />}
                                listBlockText={`
                                    ${participant.lastName} 
                                    ${participant.firstName[0]}.
                                    ${participant.patronymic[0]}.
                                `}
                                del={authorEmail === email ?
                                    <FiXCircle className='icon-delete' onClick={() => deleteParticipant()} /> :
                                    <></>
                                }
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Project;