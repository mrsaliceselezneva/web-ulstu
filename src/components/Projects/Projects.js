import './Projects.scss';
import Project from '../Project/Project';
import Search from '../Search/Search';
import React, {useState} from 'react';
import { FiPlusCircle, FiLayout } from 'react-icons/fi';

function Projects(){
    const [all, setAll] = useState(true);
    const [my, setMy] = useState(false);

    return(
        <div className='projects'>
            <div className='projects-menu'>
                <Search width={20} heigth={20} placeholder={"Поиск проектов"}/>
                <div className='choose'>
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
                    <div className='add-project'>
                        <FiLayout className='add-project-icon' />
                        <FiPlusCircle className='add-project-icon' />
                    </div>
                </div>
            </div>
            <div className='list-projects'>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    );
}

export default Projects;
