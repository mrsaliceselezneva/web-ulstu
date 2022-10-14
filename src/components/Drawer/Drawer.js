import styles from './drawer.scss'
import {AnimatePresence, motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FiBarChart2, FiCalendar, FiCheckSquare, FiEdit } from 'react-icons/fi'
import { useState } from 'react'

const Drawer = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const routes = [
       {
        path: "/",
        name:"Главаня",
        icon: <FiBarChart2/>
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
        path: "/",
        name:"Ответы преподавателей",
        icon:<FiEdit/>
       }
    ]

    
    return (
        <div className="container">
            
            <div  className={`sidebar ${isOpen ? "" : "opened"}`}>

                <div className="top_section">
                    
                    
                    <div className="drawerLogo"> 
                        <img src='/images/logo.svg' alt = "logo" onClick={toggle}/>
                    </div>
                    
                    <div className="drawer_span">
                        {isOpen && <p className="logo"><b>Learn</b>.Ulstu</p>}
                    </div>
                    
                    

                </div>

                <section className="routes"> 

                    {routes.map((route) => (
                        
                        <NavLink to={route.path} key={route.name}className="link">
                           
                           <div className="icon">{route.icon}</div>
                           <AnimatePresence>
                               {isOpen && <motion.div className="link_text">{route.name}</motion.div>}
                           </AnimatePresence>
                     
                        </NavLink>
        
                    ))}

                </section>
            </div> 

            <div className={`children ${isOpen ? "children_opened" : ""}`}>
                <main>{children}</main>
            </div>
        </div> 
    )
}

export default Drawer