import './Notification.scss';
import Requirement from '../Requirement/Requirement';
import { FiUser } from 'react-icons/fi';

function Notification({ icon, userName, projectName, notificationText, add, del}) {
    return (
        <div className='notification-block'>
            {projectName}
            <div className='notification-user'>
                <Requirement
                    icon={<FiUser className='requirement-icon-user' />}
                    requirementText={userName}
                />
                {icon}
                <div className='add-del'>
                    {add}
                    {del}
                </div>
            </div>
            <div className="notification-text">
                {notificationText}
            </div>
        </div>
    )
};

export default Notification;