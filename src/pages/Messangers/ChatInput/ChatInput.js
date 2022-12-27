import "./ChatInput.scss"
import { SmileOutlined, CameraOutlined, SendOutlined } from "@ant-design/icons"
import PropTypes from "prop-types"
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { useEffect } from "react";

const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free"
});

const ChatInput = () => {


    const recipientDialogId = useSelector(state => state.dialogs.currentDialogId)
    const recipientUserId = useSelector(state => state.users.currentDialogId)

    const dispatch = useDispatch()

    const [recipientId, setRecipientId] = useState(recipientDialogId)

    useEffect(() => {
        setRecipientId(recipientDialogId)
    }, [recipientDialogId])

    useEffect(() => {
        setRecipientId(recipientUserId)
    }, [recipientUserId])

    const [message, setMessage] = useState('')
    const addMessage = async () => {
        if (message !== '') {

            axios.post(`${process.env.REACT_APP_API_URL}/dialog/${recipientId}?message=${message}`,
            )
                .then(response => {
                    axios.get(`${process.env.REACT_APP_API_URL}/dialog/${recipientId}`)
                        .then(({ data }) => {
                            dispatch({
                                type: 'MESSAGES:SET_ITEMS',
                                payload: data
                            })
                        })
                    setMessage('')
                    console.log(message)
                })
            // window.location.reload ()
        }


    }

    return (


        <div className="chat-input" >

            <SmileOutlined />

            <input placeholder="Введите сообщение"
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => {
                    if (e.keyCode == 13) {
                        addMessage()
                    }
                }}
                value={message}
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