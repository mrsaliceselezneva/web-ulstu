import './Event.scss';
import defaultBackground from '../assets/images/default_project_background.svg';
import { FiCalendar } from 'react-icons/fi';

function Project(){
    return(
        <div className='card'>
            <img src={defaultBackground} className='image' alt='defaultBackground'/>
            <div className='info'>
                <div className='name'>
                    Умный велосипед
                </div>
                <div className='dates'>
                    <FiCalendar className='icon'/>
                    01.01.2023
                </div>
                <div className='description'>
                    нужны деньги?
                </div>
                <div className='date'>
                    01.11.2022
                </div>
            </div>
        </div>
    );
}

export default Project;
