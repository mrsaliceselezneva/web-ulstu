import React from "react";
import axios from "axios";
import Notification from '../../components/Notification/Notification';
import { useState } from "react";
import './Notifications.scss';
import { useSelector } from "react-redux";
import {  FiUserPlus, FiUserX } from 'react-icons/fi';

function Notifications(){
    const [notifications, setNotifications] = useState([]);
    const { token, userId } = useSelector(state => state.userReducer);

    const [all, setAll] = useState(true);
    const [answer, setAnswer] = useState(false);
    const [invite, setInvite] = useState(false);

    React.useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(`${process.env.REACT_APP_API_URL}/project/response/list`, { headers })
            .then((response) => {
                setNotifications(response.data);
            })
            .catch((error) => {
                console.log('get responce not success');
            });
    }, []);

    function delUser(id){
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios
        .post(`${process.env.REACT_APP_API_URL}/project/response/reject?id=${id}`, { headers })
        .then((response) => {
            window.location.reload();
        })
        .catch((error) => {
            console.log('get responce not success');
        });
    }

    function addUser(id){
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        axios
        .post(`${process.env.REACT_APP_API_URL}/project/response/confirm?id=${id}`, { headers })
        .then((response) => {
            window.location.reload();
        })
        .catch((error) => {
            console.log('get responce not success');
        });
    }

    const alls =
        notifications.map((notification) => <Notification 
            userName={`${notification.user.firstName} ${notification.user.lastName}`}
            projectName={notification.project.name}
            notificationText={notification.comment}
            add={<FiUserPlus className='add-user' onClick={() => addUser(notification.id)} />}
            del={<FiUserX className='del-user' onClick={() => delUser(notification.id)} />}
        />);

    const answers =
        notifications.filter((notification) => {
            return (notification.requestToJoinProject === 'USER')
        }).map((notification) => <Notification 
            userName={`${notification.user.firstName} ${notification.user.lastName}`}
            projectName={notification.project.name}
            notificationText={notification.comment}
            add={<FiUserPlus className='add-user' onClick={() => addUser(notification.id)} />}
            del={<FiUserX className='del-user' onClick={() => delUser(notification.id)} />}
        />);

    const invites =
        notifications.filter((notification) => {
            return (notification.requestToJoinProject !== 'USER')
        }).map((notification) => <Notification 
            userName={`${notification.user.firstName} ${notification.user.lastName}`}
            projectName={notification.project.name}
            notificationText={notification.comment}
            add={<FiUserPlus className='add-user' onClick={() => addUser(notification.id)} />}
            del={<FiUserX className='del-user' onClick={() => delUser(notification.id)} />}
        />);

    function whatShow(){
        if (all) return alls;
        if (answer) return answers;
        return invites;
    }

    return (
        <div className="notifications">
            <div className='choose'>
                <>
                    <div onClick={() => {
                        setAnswer(false);
                        setAll(true);
                        setInvite(false);
                    }}
                        className={all ? 'select-choose-projects' : 'choose-projects'}>
                        Все
                    </div>
                    <div onClick={() => {
                        setAnswer(true);
                        setAll(false);
                        setInvite(false);

                    }} className={answer ? 'select-choose-projects' : 'choose-projects'}>
                        {/* сортировка по создателю */}
                        Заявки
                    </div>

                    <div onClick={() => {
                        setAnswer(false);
                        setAll(false);
                        setInvite(true);

                    }} className={invite ? 'select-choose-projects' : 'choose-projects'}>
                        {/* сортировка по создателю */}
                        Приглашения
                    </div>
                </>

            </div>
            <div className='notifications-list'>
                {whatShow()}
            </div>
        </div>
    );
}

export default Notifications;