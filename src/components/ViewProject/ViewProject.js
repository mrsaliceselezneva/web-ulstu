import './ViewProject.scss';
import defaultBackground from '../assets/images/default_project_background.png';
import { FiUser } from 'react-icons/fi';

function Project(props){
    return(
        <div className='card'  onClick={() => {
            window.location.assign(
                `${process.env.REACT_APP_URL}/projects/project/12345`
            );}}
            >
            <img src={defaultBackground} className='image' alt='defaultBackground'/>
            <div className='info'>
                <div className='name'>
                    {props.name}
                </div>
                <div className='fio'>
                    <FiUser className='icon'/>
                    Васечкин В.В.
                </div>
                <div className='description'>
                    Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет. Даже велосипед умный, а ты - нет.
                </div>
                <div className='date'>
                    01.11.2022
                </div>
            </div>
        </div>
    );
}

export default Project;
