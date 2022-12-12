import './Notification.scss';

function Notification({ icon, notificationName, notificationText, add, del}) {
    return (
        <div className='notification-block'>
            <div className='notification-user'>
                {icon}
                {notificationName}
                {add}
                {del}
            </div>
            {notificationText}
        </div>
    )
};

export default Notification;