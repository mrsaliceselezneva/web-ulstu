import './Projects.scss';
import ViewProject from '../../components/ViewProject/ViewProject';
import Event from '../../components/Event/Event';
import Search from '../../components/Search/Search';
import React, {useState} from 'react';
import { FiPlusCircle, FiLayout, FiToggleLeft, FiToggleRight, FiBriefcase } from 'react-icons/fi';

function Projects(){
    const [all, setAll] = useState(true);
    const [my, setMy] = useState(false);
    const [showProjects, setShowProjects] = useState(true);

    const projects = [
        <ViewProject />,
        <ViewProject />,
        <ViewProject />,
        <ViewProject />,
        <ViewProject />,
        <ViewProject />,
        <ViewProject />,
    ]

    const events = [
        <Event />,
        <Event />,
    ]

    return(
        <div className='projects'>
            <div className='projects-menu'>
                <Search width={20} heigth={20} placeholder={showProjects ? "Поиск проектов" : "Поиск мероприятий"}/>
                <div className='switch'>
                    { showProjects ? 
                        <FiToggleLeft onClick={(event) => {setShowProjects(!showProjects)}}  className="switch-icon" />
                        :
                        <FiToggleRight onClick={(event) => {setShowProjects(!showProjects)}} className="switch-icon" />
                    }
                </div>
                <div className='choose'>
                    { showProjects ? 
                        <>
                            <div onClick={(event) => {
                                if(!all){
                                    setMy(!my);
                                    setAll(!all);
                                }
                            }}
                            className={all ? 'select-choose-projects' : 'choose-projects'}>
                                Все
                            </div>
                            <div onClick={(event) => {
                                if(!my){
                                    setMy(!my);
                                    setAll(!all);
                                }
                            }} className={my ? 'select-choose-projects' : 'choose-projects'}>
                                {/* сортировка по создателю */}
                                Мои
                            </div>
                        </>
                        :
                        <></>
                    }    

                    { showProjects ? 
                        <div className='add' onClick={() => {
                            window.location.assign(
                                `${process.env.REACT_APP_URL}/projects/create-project`
                            );
                        }}>
                            <FiLayout className='add-icon' />
                            <FiPlusCircle className='add-icon' />
                        </div>
                        :
                        <div className='add' onClick={() => {
                            window.location.assign(
                                `${process.env.REACT_APP_URL}/projects/create-investor`
                            );
                        }}>
                            <FiBriefcase className='add-icon' />
                            <FiPlusCircle className='add-icon' />
                        </div>
                    }


                </div>
            </div>
            <div className='list'>
                    { showProjects ? 
                        projects.map((project, id) => (project))
                        :
                        events.map((ev, id) => (ev))
                    }
            </div>
        </div>
    );
}

export default Projects;
