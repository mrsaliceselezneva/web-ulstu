import classNames from "classnames"

import IconReaded from '../IconReaded/IconReaded'
import { format } from 'date-fns'
import isToday from 'date-fns/isToday'
import { AvatarGenerator } from 'random-avatar-generator';


const generator = new AvatarGenerator();

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
            <img src={generator.generateRandomAvatar()}
                alt="avatar" />
        )
    }
}

const DialogItem = ({ _id, user, message, unreaded, isMe, onSelect, currentDialogId }) => {

    return (
        <div className={classNames('dialogs__item', {
            'dialogs__item--online': user.isOnline,
            'dialogs__item--selected': currentDialogId === _id
        })}
            onClick={onSelect.bind(this, _id)}
        >

            <div className="dialogs__item-avatar">
                {
                    getAvatar(user.avatar)
                }

            </div>

            <div className="dialogs__item-info">

                <div className="dialogs__item-info-top">
                    <b className='dialogs__item-info-top-name'>{user.fullname}{user.lastName}</b>
                    <span>
                        {getMessageTime(message.created_at)}
                    </span>
                </div>

                <div className="dialogs__item-info-bottom">

                    <p>{message && message.text}</p>

                    {isMe && <IconReaded isMe={true} isReaded={false} />}
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