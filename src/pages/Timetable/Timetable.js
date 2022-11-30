import axios from "axios";
import React from 'react';
import Subject from "../../components/Subject/Subject";
import { useSelector } from "react-redux";

import './Timetable.scss';
import { FiClock } from 'react-icons/fi';
import Sleep from '../../components/assets/images/sleep.svg';

function dateWeekDay(daysInMonth, today, nowDate, div){
    return daysInMonth < div - today + nowDate ?
        div - today + nowDate - daysInMonth : 
        (1 > div - today + nowDate ? 
            new Date(date.getFullYear(), date.getMonth(), 0).getDate()  + div - today + nowDate
            : div - today + nowDate
        );
}

const date = new Date();
const nowDate = date.getDate();
const today = date.getDay();
const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//const currentWeek = Math.ceil((nowDate + 6 - today) / 7);


const days = [
{
    number: dateWeekDay(daysInMonth, today, nowDate, 1),
    weekday: "понедельник",
},
{
    number: dateWeekDay(daysInMonth, today, nowDate, 2),
    weekday: "вторник",
},
{
    number: dateWeekDay(daysInMonth, today, nowDate, 3),
    weekday: "среда",
},
{
    number: dateWeekDay(daysInMonth, today, nowDate, 4),
    weekday: "четверг",
},
{
    number: dateWeekDay(daysInMonth, today, nowDate, 5),
    weekday: "пятница",
},
{
    number: dateWeekDay(daysInMonth, today, nowDate, 6),
    weekday: "суббота",
},
{
    number: dateWeekDay(daysInMonth, today, nowDate, 7),
    weekday: "воскресенье",
},

];

const calls = [
    {  
        hourStart: 8,
        minutStart: 30,
        hourFinish: 9,
        minutFinish: 50,
        time: "08:30 - 09:50",
        pair: "1 пара",
    },
    {
        hourStart: 10,
        minutStart: 0,
        hourFinish: 11,
        minutFinish: 20,
        time: "10:00 - 11:20",
        pair: "2 пара",
    },
    {
        hourStart: 11,
        minutStart: 30,
        hourFinish: 12,
        minutFinish: 50,
        time: "11:30 - 12:50",
        pair: "3 пара",
    },
    {
        hourStart: 13,
        minutStart: 30,
        hourFinish: 14,
        minutFinish: 50,
        time: "13:30 - 14:50",
        pair: "4 пара",
    },
    {
        hourStart: 15,
        minutStart: 0,
        hourFinish: 16,
        minutFinish: 20,
        time: "15:00 - 16:20",
        pair: "5 пара",
    },
    {
        hourStart: 16,
        minutStart: 30,
        hourFinish: 17,
        minutFinish: 50,
        time: "16:30 - 17:50",
        pair: "6 пара",
    },
    {
        hourStart: 18,
        minutStart: 0,
        hourFinish: 19,
        minutFinish: 20,
        time: "18:00 - 19:20",
        pair: "7 пара",
    },
    {
        hourStart: 19,
        minutStart: 30,
        hourFinish: 20,
        minutFinish: 50,
        time: "19:30 - 20:50",
        pair: "8 пара",
    },
];

const pairs = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

const nameMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

const typeSubject = [
    'Лекция',
    'Практика',
    'Лаб',
];

let subjects = [
    [{'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}],
    [{'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}],
    [{'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}],
    [{'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}],
    [{'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}],
    [{'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}],
    [{'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}],
    [{'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}, {'be':false}],
];

function Timetable(){
    const [table, setTable] = React.useState(null);
    const [currentWeek, setCurrentWeek] = React.useState(0);
    const {token, group} = useSelector(state => state.userReducer);
    
    React.useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/schedule?nameGroup=${group}`)
          .then((response) => {
            setTable(response.data);
            setCurrentWeek(response.data.currentWeek % 2 ? 1 : 2);
            table.days.map((t, i) => {
                if (t.numberWeek === table.currentWeek){
                  t.couples.map((tt, j) => {
                      subjects[tt.pair_number - 1][t.numberDay - 1] = {
                        'be': true,
                        'subject': tt.subject,
                        'teacher': tt.teacher,
                        'location': tt.place,
                        'type': typeSubject[tt.typeSubject - 1],
                      };
                  });
              }
            });
          });
      }, []);


    return(
        <div className='timetable'>
            <div className='info'>
                <div className='reduction-date'>
                    {nameMonth[date.getMonth()]} {date.getFullYear()}
                </div>
                <div className='select'>
                    <select className='week'> 
                        <option>Неделя {currentWeek % 2 ? 1 : 2}</option>
                        <option>Неделя {currentWeek % 2 ? 2 : 1}</option>
                    </select>
                    <select className='group'>
                        <option>{group}</option>
                    </select>
                </div>
            </div>
            <div className='desk'>
                <div className='week-date'>
                    <div className='clock'>
                        <FiClock className='icon'/>
                    </div>
                    {days.map((day) => (
                        <div key={day.number} className={day.number === nowDate ? 'now-date' : 'date'}>
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
                        {calls.map((call) => (
                            <div key={call.pair} 
                            className=
                            {call.hourStart * 60 + call.minutStart <= date.getHours() * 60 + date.getMinutes() &&
                                call.hourFinish * 60 + call.minutFinish > date.getHours() * 60 + date.getMinutes() &&
                                today !== 0
                            ? 'now-call' : 'call'}>
                                <div className='time'>
                                    {call.time}
                                </div>
                                <div className='pair-number'>
                                    {call.pair}
                                </div>
                            </div>
                        ))}
                    </div>
                    {pairs.map((pair, i) => (
                        <div key={i} className='day'>
                            {pair.map((p, j) => (
                                <div key={i + " " + j} 
                                className={
                                    days[i].number === nowDate &&
                                    calls[j].hourStart * 60 + calls[j].minutStart <= date.getHours() * 60 + date.getMinutes() &&
                                    calls[j].hourFinish * 60 + calls[j].minutFinish > date.getHours() * 60 + date.getMinutes() ?
                                    'pair' : 'pair'
                                }>
                                    {subjects[j][i].be ? <Subject subject={subjects[j][i].subject} teacher={subjects[j][i].teacher}location={subjects[j][i].location} type={subjects[j][i].type} /> : <></>}
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className='weekend'>
                        <div className='weekend-text'>
                            выходной
                        </div>
                        <img src={Sleep} className='sleep' alt='sleep'/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Timetable;
