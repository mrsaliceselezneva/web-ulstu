import './ViewProject.scss';
import Requirement from '../../components/Requirement/Requirement';
import defaultBackground from '../assets/images/default_project_background.png';
import { FiUser } from 'react-icons/fi'; import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

function ViewProject({ previewId, id, name, author, description, date, myProject, member}) {
    const { token } = useSelector(state => state.userReducer);
    const [projectRequirementsList, setProjectRequirementsList] = useState([]);
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
            .catch((error) => {
                setAvatar(defaultBackground);
            });
            axios
            .get(`${process.env.REACT_APP_API_URL}/project/?id=${id}`)
            .then((response) => {
                setProjectRequirementsList(response.data.competences);
            });

    }, []);

    const requirementsProject =
        projectRequirementsList.map((value) => <Requirement
            requirementText={value.name}
        />);

    function whatColor(){
        if (myProject)
            return 'card__container_my';
        if (member)
        return 'card__container_member';
        return 'card__container_other';
    }
    
    return (
        <div className={whatColor()} onClick={() => {
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

                <div className='card__body__requirements'>
                    {requirementsProject}
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