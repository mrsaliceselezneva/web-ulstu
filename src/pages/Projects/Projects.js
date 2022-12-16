import axios from "axios";
import React, { useState } from 'react';
import './Projects.scss';
import ViewProject from '../../components/ViewProject/ViewProject';
import Search from '../../components/Search/Search';
import { FiPlusCircle, FiLayout } from 'react-icons/fi';


import format from "date-fns/format";

import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";


function Projects() {
    const { email } = useSelector(state => state.userReducer);


    const [all, setAll] = useState(true);
    const [my, setMy] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [projects, setProjects] = useState([]);

    const [dairyPage, setDairyPage] = useState(1)
    const [dairyPerPage] = useState(8)
    const lastDairyIndex = dairyPage * dairyPerPage
    const firstDairyPage = lastDairyIndex - dairyPerPage
    const currentDairy = projects.slice(firstDairyPage, lastDairyIndex)
    const paginate = pageNumber => setDairyPage(pageNumber)

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/project/list`)
            .then((response) => {
                console.log(response.data)
                setProjects(response.data);
            });
    }, []);

    const searchProjects =
        currentDairy.filter((value) => {
            return (value.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        }).map((value) => <ViewProject
            name={value.name}
            author={`${value.author.lastName} ${value.author.firstName[0]}.${value.author.patronymic[0]}.`}
            description={value.description}
            date={format(new Date(value.registrationDate * 1000).getTime(), 'dd.MM.yyyy')}
            id={value.id}
        />);

    const myProjects =
        projects.filter((value) => {
            return (value.author.email.includes(email))
        }).map((value) => <ViewProject
            name={value.name}
            author={`${value.author.lastName} ${value.author.firstName[0]}.${value.author.patronymic[0]}.`}
            description={value.description}
            date={format(new Date(value.registrationDate * 1000).getTime(), 'dd.MM.yyyy')}
            id={value.id}
        />);


    return (

        <div className='projects'>
            <div className='projects-menu'>
                <Search
                    width={20}
                    heigth={20}
                    placeholder="Поиск проектов"
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <div className='choose'>
                    <>
                        <div onClick={() => {
                            if (!all) {
                                setMy(!my);
                                setAll(!all);
                            }
                        }}
                            className={all ? 'select-choose-projects' : 'choose-projects'}>
                            Все
                        </div>
                        <div onClick={() => {
                            if (!my) {
                                setMy(!my);
                                setAll(!all);
                            }

                        }} className={my ? 'select-choose-projects' : 'choose-projects'}>
                            {/* сортировка по создателю */}
                            Мои
                        </div>
                    </>


                    <div className='add' onClick={() => {
                        window.location.assign(
                            `${process.env.REACT_APP_URL}/projects/create-project`
                        );
                    }}>
                        <FiLayout className='add-icon' />
                        <FiPlusCircle className='add-icon' />
                    </div>


                </div>
            </div>
            <div className='list'>

                {my ?
                    myProjects.map((project, id) => (project))
                    :
                    searchProjects.map((project, id) => (project))

                }
            </div>

            <Pagination />
        </div>
    );
}

export default Projects;