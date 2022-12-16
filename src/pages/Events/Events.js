import axios from "axios";
import React, { useState } from 'react';
import './Events.scss';
import ViewProject from '../../components/ViewProject/ViewProject';
import Search from '../../components/Search/Search';
import { FiPlusCircle, FiLayout } from 'react-icons/fi';
import format from "date-fns/format";

import { useSelector } from "react-redux";
import Event from "../../components/Event/Event";
import { convert } from "html-to-text";
import Pagination from "../../components/Pagination/Pagination";


function Events() {
    const { email } = useSelector(state => state.userReducer);

    const [searchValue, setSearchValue] = useState('');
    const [projects, setProjects] = useState([]);

    const [dairyPage, setDairyPage] = useState(1)
    const [dairyPerPage] = useState(10)
    const lastDairyIndex = dairyPage * dairyPerPage
    const firstDairyPage = lastDairyIndex - dairyPerPage
    const currentDairy = projects.slice(firstDairyPage, lastDairyIndex)
    const paginate = pageNumber => setDairyPage(pageNumber)

    React.useEffect(() => {

        axios
            .get(`${process.env.REACT_APP_API_URL}/investor/list`)
            .then((response) => {
                setProjects(response.data);
                console.log(response.data)
            });
    }, []);

    const searchProjects =
        currentDairy.filter((value) => {
            return (value.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        }).map((value) => <Event
            previewUrl={value.previewUrl}
            name={value.name}
            investorSite={value.investorSite}
            beginningDate={format(new Date(value.beginningDate * 1000).getTime(), 'dd.MM.yyyy')}
            endingDate={format(new Date(value.endingDate * 1000).getTime(), 'dd.MM.yyyy')}
            description={convert(value.description)}
            id={value.id}
        />);

    // const myProjects = 
    //     projects.filter((value) => 
    //         { return (value.author.email.includes(email))
    //     }).map((value) =>  <ViewProject 
    //             name = {value.name} 
    //             author = {`${value.author.lastName} ${value.author.firstName[0]}.${value.author.patronymic[0]}.`}
    //             description = {value.description}
    //             date = {format(new Date(value.registrationDate * 1000).getTime(), 'dd.mm.yyyy')}
    //             id = {value.id}
    //         />);


    return (
        <div className='projects'>
            <div className='projects-menu'>
                <Search
                    width={20}
                    heigth={20}
                    placeholder="Поиск мероприятий"
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <div className='choose'>
                </div>
            </div>
            <div className='list'>
                {searchProjects.map((project, id) => (project))}
            </div>

            <Pagination
                dairyPerPage={dairyPerPage}
                totalDairy={projects.length}
                paginate={paginate} />
        </div>
    );
}

export default Events;
