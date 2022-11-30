import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { dialogsActions } from '../reduxMessage/actions'
import Dialogs from "../pages/Messangers/Dialogs/Dialogs";


const DialogsCont = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId }) => {

    const [inputValue, setValue] = useState("")
    const [filtered, setFiltredItems] = useState(Array.from(items))

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