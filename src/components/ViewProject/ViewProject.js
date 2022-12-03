import './ViewProject.scss';
import defaultBackground from '../assets/images/default_project_background.png';
import { FiUser } from 'react-icons/fi';

function Project(props){
    return(
        <div className='card'  onClick={() => {
            window.location.assign(
                `${process.env.REACT_APP_URL}/projects/project/?id=${props.id}`
            );}}
            >
            <img src={defaultBackground} className='image' alt='defaultBackground'/>
            <div className='info'>
                <div className='name'>
                    {props.name}
                </div>
                <div className='fio'>
                    <FiUser className='icon'/>
                    {props.author}
                </div>
                <div className='description'>
                    {props.description}
                </div>
                <div className='date'>
                    {props.date}
                </div>
            </div>
        </div>
    );
}

export default Project;
