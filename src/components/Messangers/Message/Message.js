import './message.scss'
import PropTypes from "prop-types"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import ruLocale from "date-fns/locale/ru"
import classNames from "classnames"
import readed from "../../assets/images/readed.svg"
import noreaded from "../../assets/images/noreaded.svg"


const Message = ({
    avatar,
    user,
    text,
    date,
    isMe,
    isChecked,
    attachments,
    isTyping
}) => {

    return (
        <div className={classNames('message',
            {
                'message--isme': isMe,
                "message--is-typing": isTyping,
                // "message--image": attachments.lenght === 1
            })}>

            <div className='message__content'>

                <div className='message__avatar'>
                    <img src={avatar} alt="avatar" />
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
                            {formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}

                            {isMe && isChecked ? (
                                <img src={readed} alt="readed" />
                            ) :
                                (
                                    <img src={noreaded} alt="readed" />
                                )
                            }

                        </div>}
                    </div>}

                    <div className='message__attachments'>

                        {attachments &&
                            attachments.map(item => (
                                <div className='message__attachments-item'>
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
    isTyping: PropTypes.bool
}

export default Message