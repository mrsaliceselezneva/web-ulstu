import "./ChatInput.scss"
import { SmileOutlined, CameraOutlined, SendOutlined } from "@ant-design/icons"
import PropTypes from "prop-types"

const ChatInput = props => (
    <div className="chat-input">
        <SmileOutlined />
        <input placeholder="Введите сообщение" />
        <div className="chat-input__actions">
            <CameraOutlined />
            <SendOutlined />
        </div>
    </div>

)

ChatInput.propTypes = {
    className: PropTypes.string
}



export default ChatInput