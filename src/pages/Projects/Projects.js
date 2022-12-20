import axios from "axios";
import React, { useState } from 'react';
import './Projects.scss';
import ViewProject from '../../components/ViewProject/ViewProject';
import Search from '../../components/Search/Search';
import { FiPlusCircle, FiLayout } from 'react-icons/fi';


import format from "date-fns/format";

import { useSelector } from "react-redux";


function Projects() {
    const { email } = useSelector(state => state.userReducer);


    const [all, setAll] = useState(true);
    const [my, setMy] = useState(false);
    const [other, setOther] = useState(false);
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
            date={format(new Date(value.registrationDate * 1000).getTime(), 'dd.MM.yyyy')}
            id={value.id}
            myProject={value.author.email === email}
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
            myProject={true}
        />);

    const otherProjects =
        projects.filter((value) => {
            return (!value.author.email.includes(email))
        }).map((value) => <ViewProject
            name={value.name}
            author={`${value.author.lastName} ${value.author.firstName[0]}.${value.author.patronymic[0]}.`}
            description={value.description}
            date={format(new Date(value.registrationDate * 1000).getTime(), 'dd.mm.yyyy')}
            id={value.id}
            myProject={false}
        />);

    
        function filterProjects(){
            if (all) return searchProjects.map((project, id) => (project));
            if (my) return myProjects.map((project, id) => (project));
            if (other) return otherProjects.map((project, id) => (project));
        }

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
                            setMy(false);
                            setAll(true);
                            setOther(false);
                        }}
                            className={all ? 'select-choose-projects' : 'choose-projects'}>
                            Все
                        </div>
                        <div onClick={() => {
                            setMy(true);
                            setAll(false);
                            setOther(false);

                        }} className={my ? 'select-choose-projects' : 'choose-projects'}>
                            {/* сортировка по создателю */}
                            Мои
                        </div>

                        <div onClick={() => {
                            setMy(false);
                            setAll(false);
                            setOther(true);

                        }} className={other ? 'select-choose-projects' : 'choose-projects'}>
                            {/* сортировка по создателю */}
                            Чужие
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

                {filterProjects()}
            </div>
        </div>
    );
}

export default Projects;