import { usersAPI } from "../../utils/api";

const actions = {

    setUsers: items => ({
        type: 'USERS:SET_ITEMS',
        payload: items
    }),

    setCurrentDialogId: id => ({

        type: 'USERS:SET_CURRENT_DIALOG_ID',
        payload: id
    }),

    fetchUsers: () => dispatch => {
        usersAPI.getAllUsers().then(({ data }) => {
            dispatch(actions.setUsers(data))
        })
    }
}

export default actions