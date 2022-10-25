import './Drawer.scss';
import { NavLink } from 'react-router-dom';
import { FiLogOut, FiCalendar, FiCheckSquare, FiHome, FiMessageSquare, FiBell, FiLayout } from 'react-icons/fi';
import repeatBackground from '../assets/images/repeat-background.png';

function Drawer (props) {

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
                            Имя Фамилия
                        </div>
                        <div className='group'>
                            ИВТАСбд-41
                        </div>
                    </div>
                    <img className='avatar' src='./images/avatar.png' alt = "avatar" />
                    <div className='notice-exit'>
                        <FiBell className='notice' />
                        <a href='/login'>
                            <FiLogOut className='exit' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='body'>
                <div className='sidebar'>
                    {routes.map((route) => (
                        <NavLink to={route.path} key={route.name} className="link">
                            <div className="icon">{route.icon}</div>
                            <div className="link_text">{route.name}</div>
                        </NavLink>

                    ))}
                </div>
                {props.central}
            </div>
        </div> 
    )
};

export default Drawer;