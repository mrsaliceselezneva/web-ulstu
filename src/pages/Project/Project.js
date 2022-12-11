import axios from "axios";
import React, { useState } from 'react';
import './Project.scss';
import Requirement from '../../components/Requirement/Requirement';
import ListBlock from '../../components/ListBlock/ListBlock';
import Commit from '../../components/Commit/Commit';
import defaultBackground from '../../components/assets/images/default_project_background.png';
import { FiUser, FiCalendar, FiUserPlus, FiCheckSquare, FiPlusCircle, FiXCircle } from 'react-icons/fi';
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

    return (
        <div className='project'>
            <div className='main'>
                <div className='main-top-section'>
                    <img src={defaultBackground} className='image' alt='defaultBackground' />
                    <div className='info'>
                        <div className='name'>{name}</div>
                        <div className='fio'>
                            <Requirement
                                icon={<FiUser className='project-icon-user' />}
                                requirementText={author}
                            />

                        </div>
                        <div className='date'>
                            <Requirement
                                icon={<FiCalendar className='project-icon-date' />}
                                requirementText={"01.01.2023"}
                            />
                        </div>
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
                                <div className='input-block'>
                                    <input 
                                        onChange={(event) => {
                                        setRequirementInput(event.target.value);
                                        }}
                                        className="input" type="text" placeholder='требование'
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
                                            <FiXCircle className='icon-delete' onClick={() => deleteRequirement()} /> :
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
                                <div className='input-block'>
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
                <div className='participants-title'>
                    Участники
                    {authorEmail === email ?
                        <></> :
                        <FiUserPlus className='icon-add-participant' onClick={() => addParticipant()} />
                    }

                </div>
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