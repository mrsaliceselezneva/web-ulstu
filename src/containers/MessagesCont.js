import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

import { messagesActions } from "../reduxMessage/actions"
import Messages from "../pages/Messangers/Messages/Messages";

const MessagesCont = ({ currentUserId, currentDialogId, fetchMessages, items, isLoading }) => {

    const messageRef = useRef(null)
    const { userId } = useSelector(state => state.userReducer);

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId)
        }

    }, [currentDialogId])

    useEffect(() => {
        if (currentUserId) {
            fetchMessages(currentUserId)
        }
    }, [currentUserId])

    // useEffect(() => {
    //     setRecipientId(recipientDialogId)
    // }, [recipientDialogId])

    // useEffect(() => {
    //     setRecipientId(recipientUserId)
    // }, [recipientUserId])


    useEffect(() => {
        messageRef.current.scrollTo(0, 999999)
    }, [items])

    return <Messages items={items} blockRef={messageRef} isLoading={isLoading} userId={userId}/>
}

export default connect(({ dialogs, messages, users }) => ({
    currentDialogId: dialogs.currentDialogId,
    currentUserId: users.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading
}), messagesActions)(MessagesCont)
