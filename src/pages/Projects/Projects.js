import axios from "axios";
import React, { useState } from 'react';
import './Projects.scss';
import ViewProject from '../../components/ViewProject/ViewProject';
import Event from '../../components/Event/Event';
import Search from '../../components/Search/Search';
import { FiPlusCircle, FiLayout, FiToggleLeft, FiToggleRight, FiBriefcase } from 'react-icons/fi';
import format from "date-fns/format";

import { useSelector } from "react-redux";


function Projects() {
    const { email } = useSelector(state => state.userReducer);

    const [all, setAll] = useState(true);
    const [my, setMy] = useState(false);
    const [showProjects, setShowProjects] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [projects, setProjects] = useState([]);

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/project/list`)
            .then((response) => {
                setProjects(response.data);
            });
    }, []);

    const searchProjects =
        projects.filter((value) => {
            return (value.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        }).map((value) => <ViewProject
            name={value.name}
            author={`${value.author.lastName} ${value.author.firstName[0]}.${value.author.patronymic[0]}.`}
            description={value.description}
            date={format(new Date(value.registrationDate * 1000).getTime(), 'dd.mm.yyyy')}
            id={value.id}
        />);

    const myProjects =
        projects.filter((value) => {
            return (value.author.email.includes(email))
        }).map((value) => <ViewProject
            name={value.name}
            author={`${value.author.lastName} ${value.author.firstName[0]}.${value.author.patronymic[0]}.`}
            description={value.description}
            date={format(new Date(value.registrationDate * 1000).getTime(), 'dd.mm.yyyy')}
            id={value.id}
        />);


    const events = [
        <Event />,
        <Event />,
    ]

    return (
        <div className='projects'>
            <div className='projects-menu'>
                <Search
                    width={20}
                    heigth={20}
                    placeholder={showProjects ? "Поиск проектов" : "Поиск мероприятий"}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                {/* <div className='switch'>
                    { showProjects ? 
                        <FiToggleLeft onClick={(event) => {setShowProjects(!showProjects)}}  className="switch-icon" />
                        :
                        <FiToggleRight onClick={(event) => {setShowProjects(!showProjects)}} className="switch-icon" />
                    }
                </div> */}
                <div className='choose'>
                    {showProjects ?
                        <>
                            <div onClick={(event) => {
                                if (!all) {
                                    setMy(!my);
                                    setAll(!all);
                                }
                            }}
                                className={all ? 'select-choose-projects' : 'choose-projects'}>
                                Все
                            </div>
                            <div onClick={(event) => {
                                if (!my) {
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

                    {showProjects ?
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
                {my ?
                    myProjects.map((project, id) => (project))
                    :
                    searchProjects.map((project, id) => (project))
                }
            </div>
        </div>
    );
}

export default Projects;