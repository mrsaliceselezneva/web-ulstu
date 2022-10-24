import './drawer.scss';
import {AnimatePresence, motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiLogOut, FiCalendar, FiCheckSquare, FiHome, FiMessageSquare, FiBell, FiLayout } from 'react-icons/fi';
import { useState } from 'react';
import repeatBackground from '../assets/images/repeat-background.png';

const Drawer = () => {
    const [open, setOpen] = useState(true);

    // const toggle = () => setIsOpen(!isOpen);
    const sidebarOpen = () => {setOpen(!open);};

    const routes = [
       {
        path: "/",
        name:"Главаня",
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
        path: "/login",
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
                            Имя Фамилия
                        </div>
                        <div className='group'>
                            ИВТАСбд-41
                        </div>
                    </div>
                    <img className='avatar' src='./images/avatar.png' alt = "avatar" />
                    <div className='notice-exit'>
                        {/* <i className='fa fa-bell notice' aria-hidden="true"/> */}
                        <FiBell className='notice' />
                        <FiLogOut className='exit' />
                    </div>
                </div>
            </div>
            {/* <div>
            <button onClick={sidebarOpen} 
            className={`${open ? "fa fa-angle-double-left" : "fa fa-angle-double-right"} sidebar-button`}
             />
            <div className={`sidebar-${open ? "open" : "close"}`}>

                {routes.map((route) => (
                    <NavLink to={route.path} key={route.name} className="link">
                        
                        <div className="icon">{route.icon}</div>
                        
                            {open && <div className="link_text">{route.name}</div>}
                    </NavLink>
        
                ))}
            </div> */}
             <div className={`sidebar`}>

                {routes.map((route) => (
                    <NavLink to={route.path} key={route.name} className="link">
                        <div className="icon">{route.icon}</div>
                        <div className="link_text">{route.name}</div>
                    </NavLink>

                ))}
            </div>
        </div> 
    )
};

export default Drawer;