import { dialogsAPI } from "../../utils/api";
import { lastmessAPI } from "../../utils/api";

const actions = {

    setDialogs: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),

    // setLastMess: items => ({
    //     type: 'DIALOGS:LAST_MESS',
    //     payload: items
    // }),

    setCurrentDialogId: id => ({

        type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
        payload: id

    }),

    fetchDialogs: () => dispatch => {
        dialogsAPI.getAll().then(({ data }) => {
            dispatch(actions.setDialogs(data))
        })
    },

    // fetchLastMess: () => dispatch => {
    //     lastmessAPI.getLastMessage().then(({ data }) => {
    //         dispatch(actions.setLastMess(data))
    //     })
    // }
}

export default actions