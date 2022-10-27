import Time from '../../Time/Time'
import classNames from "classnames"

import "./dialogItem.scss"
import IconReaded from '../IconReaded/IconReaded'

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

const DialogItem = ({ user, message, unreaded }) => {

    return (
        <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>

            <div className="dialogs__item-avatar">
                {/* <img src={user.avatar} alt="avatar" /> */}
                {getAvatar("https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg")}

            </div>

            <div className="dialogs__item-info">

                <div className="dialogs__item-info-top">
                    <b className='dialogs__item-info-top-name'>{user.fullname}</b>
                    <span>
                        {/* <Time date={new Date()} /> */}
                        10:39
                    </span>
                </div>

                <div className="dialogs__item-info-bottom">
                    <p>
                        Классно? Классно! Классно? Классно!Классно? Классно!
                    </p>

                    <IconReaded isMe={true} isReaded={true} />
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