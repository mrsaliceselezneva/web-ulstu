import { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "../reduxMessage/actions"
import Messages from "../pages/Messangers/Messages/Messages";

const MessagesCont = ({ currentDialogId, fetchMessages, items, isLoading}) => {

    const messageRef = useRef(null)

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId)
        }

    }, [currentDialogId])

    useEffect(() => {
        messageRef.current.scrollTo(0, 999999)
    }, [items])

    return <Messages items={items.messages_history} blockRef={messageRef} isLoading={isLoading} />
}

export default connect(({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading
}), messagesActions)(MessagesCont)
