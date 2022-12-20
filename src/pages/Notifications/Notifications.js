import React from "react";
import axios from "axios";
import Notification from '../../components/Notification/Notification';
import { useState } from "react";
import './Notifications.scss';
import { useSelector } from "react-redux";
import {  FiUserPlus, FiUserX } from 'react-icons/fi';

function Notifications(){
    const [notifications, setNotifications] = useState([]);
    const { token } = useSelector(state => state.userReducer);

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

    return (
        <div className='notifications-list'>
            {notifications.map((notification, id) => <Notification 
                key={id}
                userName={`${notification.user.firstName} ${notification.user.lastName}`}
                projectName={notification.project.name}
                notificationText={notification.comment}
                add={<FiUserPlus className='add-user' onClick={() => addUser(notification.id)} />}
                del={<FiUserX className='del-user' onClick={() => delUser(notification.id)} />}
             />)}
        </div>
    );
}

export default Notifications;