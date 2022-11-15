import './Project.scss';
import Requirement from '../Requirement/Requirement';
import ListBlock from '../ListBlock/ListBlock';
import Commit from '../Commit/Commit';
import defaultBackground from '../assets/images/default_project_background.svg';
import { FiUser, FiCalendar, FiUserPlus, FiCheckSquare } from 'react-icons/fi';

function Project(){

    const requirementsList = [
        {
            requirementText: "Python",
            block: <Requirement requirementText={"Python"} />,
        },
        {
            requirementText: "React",
            block: <Requirement requirementText={"React"} />,
        },
     ];

     const participants = [
        {
            listBlockText: "Андрей",
            block: <ListBlock icon={<FiUser className='list-block-icon'/>} listBlockText={"Андрей"} />,
        },
        {
            listBlockText: "Дима",
            block: <ListBlock icon={<FiUser className='list-block-icon'/>} listBlockText={"Дима"} />,
        },
     ];

     const commits = [
        {
            blockText: "поиск команды",
            block: <Commit icon={<FiCheckSquare className='commit-icon'/>} listBlockText={"поиск команды"} />,
        },
        {
            blockText: "мы сделали много чего.",
            block: <Commit icon={<FiCheckSquare className='commit-icon'/>} listBlockText={"мы сделали много чего."} />,
        },
     ];

    return(
        <div className='project'>
            <div className='main'>
                <div className='main-top-section'>
                    <img src={defaultBackground} className='image' alt='defaultBackground'/>
                    <div className='info'>
                        <div className='name'>Проект А</div>
                        <div className='fio'>
                            <Requirement 
                                icon={<FiUser className='project-icon-user'/>} 
                                requirementText={"Фамилия И.О."}
                            />
                            
                            </div>
                        <div className='date'>
                            <Requirement 
                                icon={<FiCalendar className='project-icon-date'/>} 
                                requirementText={"01.01.2023"}
                            />
                        </div>
                        <div className='description'>
                            Очень классный проект. Денег нет, но идея огонь.
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
                                    requirement.block
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
                                commit.block
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
                    {
                        participants.map((participant, id) => (  
                            participant.block
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;
