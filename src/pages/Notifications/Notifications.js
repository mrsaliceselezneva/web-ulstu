import './Notifications.scss';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Notification from '../../components/Notification/Notification';
import {  FiUserPlus, FiUserX } from 'react-icons/fi';
import { getNotifications } from "../../redux/slices/notificationsSlice";

function Notifications(){
    const dispatch = useDispatch();
    const { notifications } = useSelector(state => state.notificationsReducer);
    
    return (
        <div className='notifications-list'>
            {notifications.map((notification, id) => <Notification 
            key={id}
            notificationName={notification.name}
            notificationText={notification.body}
            add={<FiUserPlus className='add-user' />}
            del={<FiUserX className='del-user' />}
             />)}
        </div>
    );
}

export default Notifications;