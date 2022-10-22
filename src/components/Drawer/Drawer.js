import './drawer.scss'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FiBarChart2, FiCalendar, FiCheckSquare, FiEdit } from 'react-icons/fi'
import { useState } from 'react'

const Drawer = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const routes = [
        {
            path: "/",
            name: "Главаня",
            icon: <FiBarChart2 />
        },
        {
            path: "/timetable",
            name: "Расписание",
            icon: <FiCalendar />
        },
        {
            path: "/subjects",
            name: "Предметы",
            icon: <FiCheckSquare />
        },
        {
            path: "/login",
            name: "Ответы преподавателей",
            icon: <FiEdit />
        }
    ]


    return (
        <div className="container">

            <motion.div
                className={`sidebar ${isOpen ? "opened" : ""}`}
                animate={{ width: isOpen ? "300px" : "90px" }}>

                <div className="top_section">

                    <div className="drawerLogo">
                        <img src='/images/logo.svg' alt="logo" onClick={toggle} />
                    </div>

                    <div className="drawer_span">
                        {isOpen && <p className="logo"><b>Learn</b>.Ulstu</p>}
                    </div>

                </div>

                <section className="routes">

                    {routes.map((route) => (

                        <NavLink to={route.path} key={route.name} className="link">

                            <div className="icon">{route.icon}</div>

                            {isOpen && <motion.div className="link_text">{route.name}</motion.div>}
                        </NavLink>

                    ))}

                </section>
            </motion.div>

            <motion.div
                className={`children ${isOpen ? "children_opened" : ""}`}>
                <main>{children}</main>
            </motion.div>
        </div >
    )
}

export default Drawer