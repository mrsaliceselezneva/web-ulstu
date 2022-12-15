import './Notification.scss';

function Notification({ icon, notificationName, projectName, notificationText, add, del }) {
    return (
        <div className='notification-block'>
            <div className=''>
                {projectName}
            </div>

            <div className='notification-user'>
                {icon}
                {notificationName}
                {add}
                {del}
            </div>

            <div>
                {notificationText}
            </div>

        </div>
    )
};

export default Notification;