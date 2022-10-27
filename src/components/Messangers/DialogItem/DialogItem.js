import classNames from "classnames"
import "./dialogItem.scss"
import IconReaded from '../IconReaded/IconReaded'
import { format } from 'date-fns'
import isToday from 'date-fns/isToday';

const getMessageTime = (created_at) => {
    if (isToday(new Date(created_at))) {
        return format(new Date(created_at), 'HH:mm')
    } else {
        return format(new Date(created_at), 'dd.MM.yyyy')
    }
}

const getAvatar = avatar => {
    if (avatar) {
        return (
            <img src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"
                alt="avatar" />
        )
    } else {
        //make avatar
    }
}

const DialogItem = ({ user, message, unreaded, isMe }) => {

    return (
        <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>

            <div className="dialogs__item-avatar">
                {
                    getAvatar(user.avatar)
                }

            </div>

            <div className="dialogs__item-info">

                <div className="dialogs__item-info-top">
                    <b className='dialogs__item-info-top-name'>{user.fullname}</b>
                    <span>
                        {getMessageTime(message.created_at)}
                    </span>
                </div>

                <div className="dialogs__item-info-bottom">

                    <p>{message && message.text}</p>

                    {isMe && <IconReaded isMe={true} isReaded={true} />}
                    {unreaded > 0 &&
                        <div className="dialogs__item-info-bottom-count">
                            {unreaded > 9 ? "+9" : unreaded}
                        </div>
                    }

                </div>
            </div>
        </div >
    )
}

export default DialogItem