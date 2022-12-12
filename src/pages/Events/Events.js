import axios from "axios";
import React, {useState} from 'react';
import './Events.scss';
import ViewProject from '../../components/ViewProject/ViewProject';
import Search from '../../components/Search/Search';
import { FiPlusCircle, FiLayout } from 'react-icons/fi';
import format from "date-fns/format";

import { useSelector } from "react-redux";


function Events(){
    const {email} = useSelector(state => state.userReducer);

    const [searchValue, setSearchValue] = useState('');
    const [projects, setProjects] = useState([]);

    React.useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/investor/list`)
        .then((response) => {
            setProjects(response.data);
        });
      }, []);
      
    const searchProjects = 
        projects.filter((value) => 
            { return (value.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        }).map((value) =>  <ViewProject 
                name = {value.name} 
                author = {`${value.author.lastName} ${value.author.firstName[0]}.${value.author.patronymic[0]}.`}
                description = {value.description}
                date = {format(new Date(value.registrationDate * 1000).getTime(), 'dd.mm.yyyy')}
                id = {value.id}
            />);

    const myProjects = 
        projects.filter((value) => 
            { return (value.author.email.includes(email))
        }).map((value) =>  <ViewProject 
                name = {value.name} 
                author = {`${value.author.lastName} ${value.author.firstName[0]}.${value.author.patronymic[0]}.`}
                description = {value.description}
                date = {format(new Date(value.registrationDate * 1000).getTime(), 'dd.mm.yyyy')}
                id = {value.id}
            />);


    return(
        <div className='projects'>
            <div className='projects-menu'>
                <Search 
                    width={20} 
                    heigth={20} 
                    placeholder= "Поиск мероприятий"
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <div className='choose'>
                </div>
            </div>
            <div className='list'>
                    {searchProjects.map((project, id) => (project))}
            </div>
        </div>
    );
}

export default Events;
