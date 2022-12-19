import classNames from "classnames"

import IconReaded from '../IconReaded/IconReaded'
import { format } from 'date-fns'
import isToday from 'date-fns/isToday'
import { AvatarGenerator } from 'random-avatar-generator';
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from 'axios'


const generator = new AvatarGenerator();

const getMessageTime = (created_at) => {
    if (isToday(new Date(created_at))) {
        return format(new Date(created_at) - new Date().getTimezoneOffset() * 60000, 'HH:mm')
        
    } else {
        return format(new Date(created_at), 'dd.MM.yyyy')
    }
}

const DialogItem = ({ id, user, message, unreaded, isMe, onSelect, datetime, text, from_, to_, last_message_for_you }) => {


    return (
        <div className={classNames('dialogs__item')}
            // <div className={classNames('dialogs__item', {
            //     'dialogs__item--online': user.isOnline,
            //     'dialogs__item--selected': currentDialogId === id
            // })}
            onClick={onSelect.bind(this, last_message_for_you ? from_.id : to_.id)}
        >

            <div className="dialogs__item-avatar">
                {``}
            </div>

            <div className="dialogs__item-info">

                <div className="dialogs__item-info-top">
                    <b className='dialogs__item-info-top-name'>{
                        last_message_for_you ? from_.username : to_.username
                    }</b>
                    <span>
                        {getMessageTime(datetime)}
                    </span>
                </div>

                <div className="dialogs__item-info-bottom">

                    <p>{text}</p>

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