import axios from "axios";
import React, { useState, useEffect } from 'react';
import './Event.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FiChevronsLeft } from 'react-icons/fi';

function Event() {
    const { email, token } = useSelector(state => state.userReducer);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [link, setLink] = useState('');
    const navigate = useNavigate();

    let { search } = useLocation();
    const params = new URLSearchParams(search);
    const projectId = params.get('id');

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/investor/?id=${projectId}`)
            .then((response) => {
                setTitle(response.data.name);
                setDescription(response.data.description);
                setImage(response.data.previewUrl)
                setLink(response.data.investorSite)
            });
    }, []);

    const tryDescription = (description) => {
        return { __html: description }
    }


    return (

        <div className='event'>

            <div className="event__container">

                <div className="backlink" onClick={() => navigate(-1)}>
                    <div className={'icon'}><FiChevronsLeft /><span>Назад</span></div>

                </div>

                <div className="event__container__body">

                    <div className="event__container__body__image">
                        <img src={image} />
                    </div>

                    <div className="event__container__body__info">

                        <div className="event__container__body__info__header">
                            <span>
                                {title}
                            </span>
                        </div>

                        <div className="event__container__body__info__description" dangerouslySetInnerHTML={tryDescription(description)}></div>
                    </div>

                </div>
            </div>

            <div className="event__buttons">
                <div className="event__buttons__cont">
                    <a href={link}>Cсылка на источник</a>
                </div>

            </div>

        </div>
    );
}

export default Event;
