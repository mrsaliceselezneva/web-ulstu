import './Notification.scss';

function Notification({ icon, notificationName, projectName, notificationText, add, del}) {
    return (
        <div className='notification-block'>
            {projectName}
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