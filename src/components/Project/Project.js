import './Project.scss';
import defaultBackground from '../assets/images/default_project_backgraound.svg';
import { FiUser } from 'react-icons/fi';

function Project(){
    return(
        <div className='card'>
            <img src={defaultBackground} className='image' alt='defaultBackground'/>
            <div className='info'>
                <div className='name'>
                    Умный велосипед
                </div>
                <div className='fio'>
                    <FiUser className='icon'/>
                    Васечкин В.В.
                </div>
                <div className='description'>
                    Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет.
                </div>
            </div>
        </div>
    );
}

export default Project;
