import './message.scss'
import PropTypes from "prop-types"
import classNames from "classnames"
import Time from '../../../components/Time/Time'
import IconReaded from '../IconReaded/IconReaded'
import { FiUser } from 'react-icons/fi';

const Message = ({
    avatar,
    innterviewer_user,
    id,
    senderId,
    userId,
    date,
    isReaded,
    attachments,
    isTyping,
    message
}) => {

    return (
        <div className={classNames('message',
            {   
                'message--isme': userId === senderId,
                "message--is-typing": isTyping,
                "message--image": attachments && attachments.length === 1
            })}>

            <div className='message__content'>
            {console.log(userId)}
                <div className='message__avatar'>
                    <FiUser />
                </div>

                <div className='message__info'>

                    {(message || isTyping) && < div className='message__bubble'>

                        {message && <p className='message__text'>{message}</p>}
                        {isTyping && <div className='message__typing'>
                            <span />
                            <span />
                            <span />
                        </div>}

                        {date && <div className='message__date'>
                            <Time date={date} />
                            <IconReaded isMe={userId !== senderId} isReaded={isReaded} />
                        </div>}
                    </div>}

                    {/* <div className='message__attachments'>

                        {attachments &&
                            attachments.map((item, index) => (
                                <div key={index} className='message__attachments-item'>
                                    <img src={item.url} alt="attachment" />
                                </div>
                            ))

                        }
                    </div> */}
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