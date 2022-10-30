import './Subject.scss';
import { FiMapPin, FiUser } from 'react-icons/fi';
// не хорошо хранить папку с компонентой в папке с компонентой - их лучше все хранить на одном уровне (или если их много разделять на папки по названию страницы, так например компоненты для страницы логин будут лежать в папке src/components/Login, а общие компоненты в папке src/components/common)
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