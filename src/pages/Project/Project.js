import axios from "axios";
import React, {useState} from 'react';
import './Project.scss';
import Requirement from '../../components/Requirement/Requirement';
import ListBlock from '../../components/ListBlock/ListBlock';
import Commit from '../../components/Commit/Commit';
import defaultBackground from '../../components/assets/images/default_project_background.png';
import { FiUser, FiCalendar, FiUserPlus, FiCheckSquare } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

function Project(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
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
            console.log(response.data);
            setName(response.data.name);
            setDescription(response.data.description);
            setAuthor(`${response.data.author.lastName} ${response.data.author.firstName[0]}.${response.data.author.patronymic[0]}.`);

            setRequirementsList(response.data.competences);
            setParticipants(response.data.projectParticipants);
            setCommits(response.data.projectStates);
            console.log(participants);
        });
      }, []);

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
                        </div>
                        <div className='requirements-list'>
                            {
                                requirementsList.map((requirement, id) => (  
                                    <Requirement requirementText={requirement} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='commits-list'>
                        <div className='commits-title'>
                            Состояние проекта
                        </div>
                        {
                            commits.map((commit, id) => (  
                                <Commit icon={<FiCheckSquare className='commit-icon'/>} listBlockText={commit} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='participants'>
                <div className='participants-title'>
                    {/* <FiUsers className='project-icon-participants'/> */}
                    Участники
                    <FiUserPlus className='icon-add-participant' onClick={() => {
                                console.log('add-participant');
                    }} />
                </div>
                <div className='participants-list'>
                    <ListBlock 
                        icon={<FiUser className='list-block-icon'/>} 
                        listBlockText={author} 
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
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;
