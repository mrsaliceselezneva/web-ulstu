import './Notification.scss';

function Notification({ icon, notificationName, projectName, notificationText, add, del }) {
    return (
        <div className='notification-block'>
            <div className='notification-block__name'>
                <span>{projectName}</span>
            </div>

            <div className='notification-user'>
                <span>{icon}</span>
                <span>{notificationName}</span>

            </div>

            <div className='notification-block__button'>
                {add}
                {del}
            </div>


            <div className='notification-block__message'>
                {notificationText}
            </div>

        </div>
    )
};

export default Notification;