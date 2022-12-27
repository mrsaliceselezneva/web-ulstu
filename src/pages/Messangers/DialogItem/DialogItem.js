import classNames from "classnames"

import IconReaded from '../IconReaded/IconReaded'
import { format } from 'date-fns'
import isToday from 'date-fns/isToday'
import { AvatarGenerator } from 'random-avatar-generator';
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from 'axios'
import { FiUser } from 'react-icons/fi';



const getMessageTime = (created_at) => {
    if (isToday(new Date(created_at * 1000))) {
        return format(new Date(created_at * 1000) - new Date().getTimezoneOffset() * 6000, 'HH:mm')
        
    } else {
        return format(new Date(created_at * 1000), 'dd.MM.yyyy')
    }
}

const DialogItem = ({id, avatarId, firstName, lastName, lastMessage,unreaded, isMe, onSelect }) => {


    return (
        <div className={classNames('dialogs__item')}
            // <div className={classNames('dialogs__item', {
            //     'dialogs__item--online': user.isOnline,
            //     'dialogs__item--selected': currentDialogId === id
            // })}
            onClick={onSelect.bind(this, id)}
          
        >

            <div className="dialogs__item-avatar">
            <FiUser />
            </div>

            <div className="dialogs__item-info">

                <div className="dialogs__item-info-top">
                    <b className='dialogs__item-info-top-name'>
                        {firstName} {lastName}</b>
                    <span>
                        {getMessageTime(lastMessage.createDateTime)}
                    </span>
                </div>

                <div className="dialogs__item-info-bottom">

                    <p>{lastMessage.message}</p>

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