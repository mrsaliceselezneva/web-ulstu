import { useState } from "react";
import Dialogs from "../components/Messangers/Dialogs/Dialogs";


const DialogsCont = ({ items, userId }) => {

    const [inputValue, setValue] = useState("")
    const [filtered, setFiltredItems] = useState(Array.from(items))

    const onChangeInput = value => {

        setFiltredItems(
            items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        )
        setValue(value)
    }

    return (
        <Dialogs
            userId={userId}
            items={filtered}
            inputValue={inputValue}
            onSearch={onChangeInput}

        />
    )
}

export default DialogsCont