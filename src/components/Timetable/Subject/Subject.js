import './Subject.scss';
import { FiMapPin, FiUser } from 'react-icons/fi';

function Subject() {

  return (
    <div className='card'>
        <div className='color'>
        </div>
        <div className='main'>
            <div className='name'>
                Исследование операций
            </div>
            <div className='body'>
                <div className='icons'>
                    <FiMapPin className='icon' />
                    <FiUser className='icon' />   
                </div>
                <div className='info'>
                    <div className='teacher'>
                        Горшков Д.А.
                    </div>
                    <div className='location-type'>
                        <div className='location'>
                            3 - 306
                        </div>
                        <div className='type'>
                            <div className='type-text'>
                                Лаб
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