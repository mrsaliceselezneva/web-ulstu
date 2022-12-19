import "./ChatInput.scss"
import { SmileOutlined, CameraOutlined, SendOutlined } from "@ant-design/icons"
import PropTypes from "prop-types"
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free"
});

const ChatInput = () => {

    const [message, setMessage] = useState('')
    const innterviewer_id = useSelector(state => state.dialogs.currentDialogId)
    const dispatch = useDispatch()

    const addMessage = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/chat/send-message?token=${window.localStorage.token}&innterviewer_id=${innterviewer_id}&message=${message}`, { headers: { Authorization: null } })
            .then(response => {
                axios.get(`${process.env.REACT_APP_API_URL}/chat/get-chat?token=${window.localStorage.token}&innterviewer_id=${innterviewer_id}`, { headers: { Authorization: null } })
                    .then(({ data }) => {
                        dispatch({
                            type: 'MESSAGES:SET_ITEMS',
                            payload: data
                        }.setMessages(data));
                    })
            })
        // let message = {
        //     datetime: new Date(),
        //     for_you: false,
        //     text: message,
        //     is_read: false,
        //     comment: ''
        // }        
    }

    return (
        <div className="chat-input">
            <SmileOutlined />
            <input placeholder="Введите сообщение"
                onChange={e => setMessage(e.target.value)}
            />
            <div className="chat-input__actions">

                <UploadButton uploader={uploader}
                    options={{ multi: true }}
                    onComplete={files => console.log(files)}>
                    {({ onClick }) =>
                        <CameraOutlined onClick={onClick} />

                    }
                </UploadButton>

                <SendOutlined
                    onClick={addMessage}
                />
            </div>
        </div>)
}

ChatInput.propTypes = {
    className: PropTypes.string
}



export default ChatInput