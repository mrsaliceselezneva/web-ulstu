
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { messagesActions } from "../reduxMessage/actions"
import ChatInput from "../pages/Messangers/ChatInput/ChatInput";

const SendCont = ({ fetchSendMessage, dialogs: { currentDialogId } }) => {

    const [message, setMessage] = useState('')

    if (!currentDialogId) {
        return null;
    }
    const handleSendMessage = e => {

        if (e.keyCode === 13) {
            sendMessage();
        }
    };

    const sendMessage = () => {

        fetchSendMessage({
            message: message,
            innterviewer_id: currentDialogId,

        });
        setMessage('');

    };

    return (
        <ChatInput
            message={message}
            setMessage={setMessage}
            handleSendMessage={handleSendMessage}
            sendMessage={sendMessage}
            
        />
    );

}

export default connect(
    ({ dialogs }) => ({
        dialogs,
    }),
    { ...messagesActions },
)(ChatInput);