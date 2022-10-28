import axios from "axios";
import React, {useState, useEffect} from 'react';
import Subject from "./Subject/Subject";

import './Timetable.scss';
import { FiClock } from 'react-icons/fi';
import Sleep from '../assets/images/sleep.svg';

 const date = new Date();
 const nowDate = date.getDate();
 const today = date.getDay();
 //const currentWeek = Math.ceil((nowDate + 6 - today) / 7);

 const days = [
    {
     number: 1 - today + nowDate,
     weekday: "понедельник",
    },
    {
     number: 2 - today + nowDate,
     weekday: "вторник",
    },
    {
     number: 3 - today + nowDate,
     weekday: "среда",
    },
    {
     number: 4 - today + nowDate,
     weekday: "четверг",
    },
    {
     number: 5 - today + nowDate,
     weekday: "пятница",
    },
    {
     number: 6 - today + nowDate,
     weekday: "суббота",
    },
    {
     number: 7 - today + nowDate,
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
let subjects = [

];

function Timetable(){
    const [table, setTable] = React.useState(null);
    const [currentWeek, setCurrentWeek] = React.useState(1);
    const [group, setGroup] = React.useState('ИВТАСбд-41');

    React.useEffect(() => {
        axios
          .get(`http://asus.russianitgroup.ru/api/schedule?nameGroup=${group}`)
          .then((response) => {
            setTable(response.data);
            setCurrentWeek(response.data.currentWeek % 2 ? 1 : 2);
            table.map((t, i) => {
                if (t.numberWeek === currentWeek){
                  subjects.push([]);
                  t.map((tt, j) => {
                      subjects[i].push(1);
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
                                call.hourFinish * 60 + call.minutFinish > date.getHours() * 60 + date.getMinutes() 
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
                                    'now-pair' : 'pair'
                                }>
                                    <Subject />  
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
