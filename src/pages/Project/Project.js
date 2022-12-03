import axios from "axios";
import React, {useState} from 'react';
import './Project.scss';
import Requirement from '../../components/Requirement/Requirement';
import ListBlock from '../../components/ListBlock/ListBlock';
import Commit from '../../components/Commit/Commit';
import defaultBackground from '../../components/assets/images/default_project_background.png';
import { FiUser, FiCalendar, FiUserPlus, FiCheckSquare, FiPlusCircle, FiXCircle } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

function Project(){
    const {email} = useSelector(state => state.userReducer);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [authorEmail, setAuthorEmail] = useState('');
    const [requirementsList, setRequirementsList] = useState([]);
    const [participants, setParticipants] = useState([]);
    const [commits, setCommits] = useState([]);


    // const requirementsList = [
    //     {
    //         requirementText: "Python",
    //         block: <Requirement requirementText={"Python"} />,
    //     },
    //     {
    //         requirementText: "React",
    //         block: <Requirement requirementText={"React"} />,
    //     },
    //  ];

    //  const participants = [
    //     {
    //         listBlockText: "Андрей",
    //         block: <ListBlock icon={<FiUser className='list-block-icon'/>} listBlockText={"Андрей"} />,
    //     },
    //     {
    //         listBlockText: "Дима",
    //         block: <ListBlock icon={<FiUser className='list-block-icon'/>} listBlockText={"Дима"} />,
    //     },
    //  ];

    //  const commits = [
    //     {
    //         blockText: "поиск команды",
    //         block: <Commit icon={<FiCheckSquare className='commit-icon'/>} listBlockText={"поиск команды"} />,
    //     },
    //     {
    //         blockText: "мы сделали много чего.",
    //         block: <Commit icon={<FiCheckSquare className='commit-icon'/>} listBlockText={"мы сделали много чего."} />,
    //     },
    //  ];

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

    function addRequirement(){
        console.log('add-requirement');
    }

    function addCommit(){
        console.log('add-commit');
    }

    function addParticipant(){
        console.log('add-participant');
    }

    function deleteRequirement(){
        console.log('delete-requirement');
    }

    function deleteCommit(){
        console.log('delete-commit');
    }

    function deleteParticipant(){
        console.log('delete-participant');
    }

    return(
        <div className='project'>
            <div className='main'>
                <div className='main-top-section'>
                    <img src={defaultBackground} className='image' alt='defaultBackground'/>
                    <div className='info'>
                        <div className='name'>{name}</div>
                        <div className='fio'>
                            <Requirement 
                                icon={<FiUser className='project-icon-user'/>} 
                                requirementText={author}
                            />
                            
                            </div>
                        <div className='date'>
                            <Requirement 
                                icon={<FiCalendar className='project-icon-date'/>} 
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
                                <FiPlusCircle className='icon-add-block' onClick={() => addRequirement()} /> : 
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
                                <FiPlusCircle className='icon-add-block' onClick={() => addCommit()} /> : 
                                <></>
                            }
                        </div>
                        {
                            commits.map((commit, id) => (  
                                <Commit 
                                    icon={<FiCheckSquare className='commit-icon'/>} 
                                    listBlockText={commit} 
                                    del={authorEmail === email ? 
                                        <FiXCircle className='icon-delete' onClick={() => deleteCommit()} /> : 
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
                    {/* <FiUsers className='project-icon-participants'/> */}
                    Участники
                    {authorEmail === email ? 
                    <></> : 
                        <FiUserPlus className='icon-add-participant' onClick={() => addParticipant()} />
                    }
                    
                </div>
                <div className='participants-list'>
                    <ListBlock 
                        icon={<FiUser className='list-block-icon'/>} 
                        listBlockText={author} 
                        del={authorEmail === email ? 
                            <FiXCircle className='icon-delete' onClick={() => deleteParticipant()} /> : 
                            <></>
                        }
                    />
                    {
                        participants.map((participant, id) => (  
                            <ListBlock 
                                icon={<FiUser className='list-block-icon'/>} 
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
