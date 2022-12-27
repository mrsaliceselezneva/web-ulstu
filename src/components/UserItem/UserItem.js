import { FiUser } from 'react-icons/fi';
import "./UserItem.scss"

const UserItem = ({ firstName, lastName, id, onSelect, items }) => {

    return (
        <div className="userList"
            onClick={onSelect.bind(this, id)}

        >

            <div className="userList__avatar">
                <FiUser />
            </div>

            <div className="userList__info">
                <span>{firstName} {lastName}</span>
            </div>

        </div>)
}

export default UserItem