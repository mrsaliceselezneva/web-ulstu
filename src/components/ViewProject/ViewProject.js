import './ViewProject.scss';
import defaultBackground from '../assets/images/default_project_background.png';
import { FiUser } from 'react-icons/fi';

function Project(props) {
    return (
        <div className='card__container' onClick={() => {
            window.location.assign(
                `${process.env.REACT_APP_URL}/projects/project/?id=${props.id}`
            );
        }}
        >
            <div className='card__header'>
                <img src={defaultBackground} className='image' alt='defaultBackground' />
            </div>

            <div className='card__body'>

                <div className='card__body__title'>
                    <span>{props.name}</span>
                </div>

                <div className='card__body__teacher'>
                    <FiUser className='card__body__teacher__icon' />
                    <span>{props.author}</span>
                </div>

                <div className='card__body__content'>
                    <p>{props.description}</p>
                </div>

                <div className='date'>
                    {props.date}
                </div>

            </div>
        </div>
    );
}

export default Project;