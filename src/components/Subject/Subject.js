import './Subject.scss';
import { FiMapPin, FiUser } from 'react-icons/fi';

function Subject(props) {

  return (
    <div className='card'>
        <div className={props.type === 'Лаб' ? 'color-lab' : 'color-lec'} />
        <div className='main'>
            <div className='name'>
                {props.subject}
            </div>
            <div className='body'>
                <div className='icons'>
                    <FiMapPin className={props.type === 'Лаб' ? 'icon-lab' : 'icon-lec'} />
                    <FiUser className={props.type === 'Лаб' ? 'icon-lab' : 'icon-lec'} />   
                </div>
                <div className='info'>
                    <div className='teacher'>
                        {props.teacher}
                    </div>
                    <div className='location-type'>
                        <div className='location'>
                            {props.location}
                        </div>
                        <div className={props.type === 'Лаб' ? 'type-lab' : 'type-lec'}>
                            <div className={props.type === 'Лаб' ? 'type-text-lab' : 'type-text-lec'}>
                                {props.type}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Subject;