import React from "react";
import axios from "axios";
import './Drawer.scss';
import { NavLink } from 'react-router-dom';
import { FiLogOut, FiCalendar, FiCheckSquare, FiHome, FiMessageSquare, FiBell, FiLayout } from 'react-icons/fi';
import repeatBackground from '../assets/images/repeat-background.png';

import { useSelector, useDispatch } from "react-redux";
import { loginFirstName, loginLastName, loginFutherName, loginGroup } from "../../redux/slices/userSlice";

function Drawer ({central, page}) {
    const dispatch = useDispatch();
    const {token, firstName, lastName, futherName, group} = useSelector(state => state.userReducer);

    React.useEffect(() => {
        console.log('token', token);
        const headers = {
          'Authorization': `Bearer ${token}`,
        };
        axios
        .get(`${process.env.REACT_APP_API_URL}/user`, { headers })
        .then((response) => {
            dispatch(loginFirstName(response.data.firstName));
            dispatch(loginLastName(response.data.lastName));
            dispatch(loginFutherName(response.data.patronymic));
            dispatch(loginGroup(response.data.studyGroupId));
            console.log('get fio success');
        })
        .catch((error) => {
          console.log('get fio not success');
        });
    }, []);

    const routes = [
       {
        path: "/",
        name:"Главная",
        icon: <FiHome/>
       },
       {
        path: "/timetable",
        name:"Расписание",
        icon: <FiCalendar/>
       },
       {
        path: "/subjects",
        name:"Предметы",
        icon: <FiCheckSquare/>
       },
       {
        path: "/messangers",
        name:"Чаты",
        icon:<FiMessageSquare/>
       },
       {
        path: "/projects",
        name:"Проекты",
        icon:<FiLayout/>
       },
    ];
    
    return (
        <div className="container">
            <style>
                {`body { background-color: #E5E5E5; 
                background-image: url(${repeatBackground}); 
                background-size: contain;}`}
            </style>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" />
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />

            <div className='top-section'>
                <a href='/' className='logo'>
                    <img className='logo-img' src='/images/logo.svg' alt="logo" />
                    <p>learn.UlSTU</p>
                </a>
                <div className='profile'>
                    <div className='short-info'>
                        <div className='name'>
                            {firstName} {lastName}
                        </div>
                        <div className='group'>
                            {group}
                        </div>
                    </div>
                    <img className='avatar' src='./images/avatar.png' alt = "avatar" />
                    <div className='notice-exit'>
                        <FiBell className='notice' />
                        <FiLogOut className='exit' onClick={() => {
                            dispatch(loginFirstName('unauthorized'));
                            dispatch(loginLastName('unauthorized'));
                            dispatch(loginFutherName('unauthorized'));
                            dispatch(loginGroup('unauthorized'));
                            window.location.assign(`${process.env.REACT_APP_URL}/`);
                        }}/>
                    </div>
                </div>
            </div>
            <div className='body'>
                <div className='sidebar'>
                    {routes.map((route, id) => (
                        <NavLink to={route.path} key={route.name} className="link">
                            <div className={id===page?'select-icon':'icon'}>{route.icon}</div>
                            <div className={id===page?'select-link-text':'link-text'}>{route.name}</div>
                        </NavLink>

                    ))}
                </div>
                <div className='central'>
                    {central}
                </div>
            </div>
        </div> 
    )
};

export default Drawer;