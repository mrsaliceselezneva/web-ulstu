import './message.scss'
import PropTypes from "prop-types"
import classNames from "classnames"
import Time from '../../Time/Time'
import IconReaded from '../IconReaded/IconReaded'


const Message = ({
    avatar,
    user,
    text,
    date,
    isMe,
    isReaded,
    attachments,
    isTyping
}) => {

    return (
        <div className={classNames('message',
            {
                'message--isme': isMe,
                "message--is-typing": isTyping,
                "message--image": attachments && attachments.length === 1
            })}>

            <div className='message__content'>

                <div className='message__avatar'>
                    <img src={user.avatar} alt="avatar" />
                </div>

                <div className='message__info'>

                    {(text || isTyping) && < div className='message__bubble'>

                        {text && <p className='message__text'>{text}</p>}
                        {isTyping && <div className='message__typing'>
                            <span />
                            <span />
                            <span />
                        </div>}

                        {date && <div className='message__date'>
                            <Time date={date} />
                            <IconReaded isMe={isMe} isReaded={isReaded} />
                        </div>}
                    </div>}

                    <div className='message__attachments'>

                        {attachments &&
                            attachments.map((item, index) => (
                                <div key={index} className='message__attachments-item'>
                                    <img src={item.url} alt="attachment" />
                                </div>
                            ))

                        }
                    </div>
                </div>



            </div>
        </div >
    )
}

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
}

export default Message