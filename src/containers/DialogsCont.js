import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from 'react-redux'
import { dialogsActions, lastmessActions } from '../reduxMessage/actions'
import Dialogs from "../pages/Messangers/Dialogs/Dialogs";


const DialogsCont = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId }) => {
    const [inputValue, setValue] = useState("")
    const [filtered, setFiltredItems] = useState(Array.from(items))

    const onChangeInput = value => {

        setFiltredItems(
            items.filter(dialog => dialog.firstName.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        )
        console.log(value)
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