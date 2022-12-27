import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { usersActions } from '../reduxMessage/actions'
import UserSearch from "../components/UserSearch/UserSearch";
import { useSelector, useDispatch } from "react-redux";


const UserSearchCont = ({ fetchUsers, currentDialogId, setCurrentDialogId, items }) => {
    const [inputValue, setValue] = useState("")
    const [filtered, setFiltredItems] = useState(Array.from(items))
    const { userId } = useSelector(state => state.userReducer);

    const onChangeInput = value => {

        setFiltredItems(
            items.filter(user => user.firstName.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        )
        setValue(value)
    }

    useEffect(() => {
       
        if (!items.length) {
            fetchUsers()
            console.log(items)
        } else {
            setFiltredItems( items)
        }
    }, [items])

    return (
        <UserSearch
            userId={userId}
            items={filtered}
            inputValue={inputValue}
            onSearch={onChangeInput}
            onSelectDialog={setCurrentDialogId}
            currentDialogId={currentDialogId}
        />
    )
}

export default connect(({ users }) => users, usersActions)(UserSearchCont)