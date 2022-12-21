import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import './Drawer.scss';

import { NavLink } from 'react-router-dom';
import { FiLogOut, FiCalendar, FiBriefcase, FiHome, FiMessageSquare, FiBell, FiLayout, FiUser } from 'react-icons/fi';
import repeatBackground from '../assets/images/repeat-background.png';
import avatar from '../assets/images/avatar.png';

import { useSelector, useDispatch } from "react-redux";
import { loginFirstName, loginLastName, loginFutherName, loginGroup, loginEmail, loginToken, loginUserId } from "../../redux/slices/userSlice";
import { getNotifications } from "../../redux/slices/notificationsSlice";

function Drawer({ central, page }) {
    const dispatch = useDispatch();
    const { token, firstName, lastName, group, userId } = useSelector(state => state.userReducer);
    const { notifications } = useSelector(state => state.notificationsReducer);
    const [avatar, setAvatar] = useState("");

    React.useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        setInterval(() => {
            axios
            .get(`${process.env.REACT_APP_API_URL}/user`, { headers })
            .then((response) => {
                localStorage.setItem('firstName', response.data.firstName);
                localStorage.setItem('lastName', response.data.lastName);
                localStorage.setItem('futherName', response.data.patronymic);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('userId', response.data.id);
                dispatch(loginFirstName(response.data.firstName));
                dispatch(loginLastName(response.data.lastName));
                dispatch(loginFutherName(response.data.patronymic));
                dispatch(loginEmail(response.data.email));
                dispatch(loginUserId(response.data.id));
                axios
                    .get(`${process.env.REACT_APP_API_URL}/study-group?id=${response.data.studyGroupId}`, { headers })
                    .then((response) => {
                        dispatch(loginGroup(response.data.name));
                        localStorage.setItem('group', response.data.name);
                        console.log('get fio success');
                    })
                    .catch((error) => {
                        console.log('get group not success');
                    });
                axios
                    .get(`${process.env.REACT_APP_API_URL}/files?id=${response.data.avatarId}`, { headers, responseType: 'blob' })
                    .then((response) => {
                        // const url = window.URL.createObjectURL(response.data);
                        // setAvatar(url);
                    });
                axios
                    .get(`${process.env.REACT_APP_API_URL}/project/response/list`, { headers })
                    .then((response) => {
                        localStorage.setItem('notifications', response.datalength);
                        dispatch(getNotifications(response.data.length));
                    })
                    .catch((error) => {
                        console.log('get responce not success');
                    });
            })
            .catch((error) => {
                console.log('get fio not success');
                dispatch(loginToken('unauthorized'));
                dispatch(loginFirstName('unauthorized'));
                dispatch(loginLastName('unauthorized'));
                dispatch(loginFutherName('unauthorized'));
                dispatch(loginGroup('unauthorized'));
                dispatch(loginToken('unauthorized'));
                localStorage.clear();
            });
          }, 5000);
    }, []);

    const routes = [
        {
            path: "/",
            name: "Главная",
            icon: <FiHome />
        },
        {
            path: "/messangers",
            name: "Чаты",
            icon: <FiMessageSquare />
        },
        {
            path: "/projects",
            name: "Проекты",
            icon: <FiLayout />
        },
        {
            path: "/events",
            name: "Мероприятия",
            icon: <FiBriefcase />
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
                    <div className='short-info' onClick={() => window.location.assign(`${process.env.REACT_APP_URL}/profile?id=${userId}`)}>
                        <div className='name'>
                            {firstName} {lastName}
                        </div>
                        <div className='group'>
                            {group}
                        </div>
                    </div>
                    {true ? 
                        <FiUser className="no-avatar"/> : 
                        <img className='avatar' src={avatar} alt = "avatar" />
                    }
                    <div className='notice-exit'>
                        <FiBell className={notifications > 0 ? 'red-notice' : 'notice'}
                        onClick={() => window.location.assign(`${process.env.REACT_APP_URL}/notifications`)}

                        />
                        <FiLogOut className='exit' onClick={() => {
                            dispatch(loginFirstName('unauthorized'));
                            dispatch(loginLastName('unauthorized'));
                            dispatch(loginFutherName('unauthorized'));
                            dispatch(loginGroup('unauthorized'));
                            dispatch(loginToken('unauthorized'));
                            localStorage.clear();
                        }} />
                    </div>
                </div>
            </div>
            <div className='body'>
                <div className='sidebar'>
                    {routes.map((route, id) => (
                        <NavLink to={route.path} key={route.name} className="link">
                            <div className={id === page ? 'select-icon' : 'icon'}>{route.icon}</div>
                            <div className={id === page ? 'select-link-text' : 'link-text'}>{route.name}</div>
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
