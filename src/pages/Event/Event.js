import axios from "axios";
import React, { useState } from 'react';
import './Event.scss';
import Requirement from '../../components/Requirement/Requirement';
import ListBlock from '../../components/ListBlock/ListBlock';
import Commit from '../../components/Commit/Commit';
import defaultBackground from '../../components/assets/images/default_project_background.png';
import { FiUser, FiCalendar, FiUserPlus, FiCheckSquare, FiPlusCircle, FiXCircle } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { convert } from "html-to-text";

function Event() {
    const { email, token } = useSelector(state => state.userReducer);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    

    let { search } = useLocation();
    const params = new URLSearchParams(search);
    const projectId = params.get('id');

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/investor/?id=${projectId}`)
            .then((response) => {
                setTitle(response.data.name);
                setDescription(response.data.description);
                setImage(response.data.previewUrl)
            });
    }, []);
    
    const tryDescription = (description) => {
        return {__html: description}
    }


    return (
        <div className='event'>

            <div className="event__container">

                <div className="event__container__image">
                    <img src={image} />
                </div>

                <div className="event__container__info">

                    <div className="event__container__info__header">
                        <span>
                        {title}
                        </span>
                    </div>

                    <div className="event__container__info__description"  dangerouslySetInnerHTML={tryDescription(description)}>
                       
                      
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Event;
