import './Timetable.scss';
import { FiClock } from 'react-icons/fi';

const days = [
    {
     number: 3,
     weekday: "понедельник",
    },
    {
     number: 4,
     weekday: "вторник",
    },
    {
     number: 5,
     weekday: "среда",
    },
    {
     number: 6,
     weekday: "четверг",
    },
    {
     number: 7,
     weekday: "пятница",
    },
    {
     number: 8,
     weekday: "суббота",
    },
    {
     number: 9,
     weekday: "воскресенье",
    },
    
 ];

function Timetable(){
    return(
        <div className='timetable'>
            <div className='info'>
                <div className='reduction-date'>
                    Октябрь 2022
                </div>
                <div className='select'>
                    <select className='week'> 
                        <option>Неделя 1</option>
                        <option>Неделя 2</option>
                    </select>
                    <select className='group'>
                        <option>ИВТАСбд-41</option>
                    </select>
                </div>
            </div>
            <div className='desk'>
                <div className='week-date'>
                    <div className='clock'>
                    <FiClock className='icon'/>
                    </div>
                    {days.map((day) => (
                        <div className='date'>
                            <div className='number'>
                                {day.number}
                            </div>
                            <div className='weekday'>
                                {day.weekday}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='body-desk'>
                    <div className='calls'>
                        <div className='call'>
                        </div>
                    </div>
                    <div className='day'>
                        <div className='subject'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timetable;
