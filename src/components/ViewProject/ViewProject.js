import './ViewProject.scss';
import defaultBackground from '../assets/images/default_project_background.png';
import { FiUser } from 'react-icons/fi'; import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from 'axios'

function ViewProject({ previewId, id, name, author, description, date, myProject}) {
    const { token } = useSelector(state => state.userReducer);
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(`${process.env.REACT_APP_API_URL}/files?id=${previewId}`, { headers, responseType: 'blob' })
            .then((response) => {
                const url = window.URL.createObjectURL(response.data);
                setAvatar(url);
            })

    }, [])
    return (
        <div className={myProject ? 'card__container_my' : 'card__container_other'} onClick={() => {
                window.location.assign(`${process.env.REACT_APP_URL}/projects/project/?id=${id}`);
            }}
        >
            <div className='card__header'>
                <img src={avatar} className='image' alt='defaultBackground' />
            </div>

            <div className='card__body'>

                <div className='card__body__title'>
                    <span>{name}</span>
                </div>

                <div className='card__body__teacher'>
                    <FiUser className='card__body__teacher__icon' />
                    <span>{author}</span>
                </div>

                <div className='card__body__content'>
                    <p>{description}</p>
                </div>

                <div className='date'>
                    {date}
                </div>

            </div>
        </div>
    );
}

export default ViewProject;