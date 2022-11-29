import "./ChatInput.scss"
import { SmileOutlined, CameraOutlined, SendOutlined } from "@ant-design/icons"
import PropTypes from "prop-types"
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free"
});

const ChatInput = props => (


    <div className="chat-input">
        <SmileOutlined />
        <input placeholder="Введите сообщение" />
        <div className="chat-input__actions">

            <UploadButton uploader={uploader}
                options={{ multi: true }}
                onComplete={files => console.log(files)}>
                {({ onClick }) =>
                    <CameraOutlined onClick={onClick} />

                }
            </UploadButton>

            <SendOutlined />
        </div>
    </div>

)

ChatInput.propTypes = {
    className: PropTypes.string
}



export default ChatInput