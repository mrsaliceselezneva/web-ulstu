import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'
import { dialogsActions, lastmessActions } from '../reduxMessage/actions'
import Dialogs from "../pages/Messangers/Dialogs/Dialogs";


const DialogsCont = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId, fetchLastMessage }) => {
    const [inputValue, setValue] = useState("")
    const [filtered, setFiltredItems] = useState(Array.from(items))
    // const [lastmess, setLastmess] = useState(Array.from(items))
    const lastmessage = useSelector(state => state.lastmess)

    const onChangeInput = value => {

        setFiltredItems(
            items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        )
        setValue(value)
    }

    useEffect(() => {
        if (!items.length) {
            fetchDialogs()
        } else {
            setFiltredItems(items)
        }

    }, [items])

    // useEffect(() => {
    //     if (!lastmessage.length) {
    //         lastmessActions.fetchLastMessage()
    //     } else {
    //         lastmessActions.setLastMessage(lastmessage)
    //     }
    // }, [lastmessage])



    return (
        <Dialogs
            userId={userId}
            items={filtered}
            inputValue={inputValue}
            onSearch={onChangeInput}
            onSelectDialog={setCurrentDialogId}
            currentDialogId={currentDialogId}

        />
    )
}

export default connect(({ dialogs }) => dialogs, dialogsActions)(DialogsCont)