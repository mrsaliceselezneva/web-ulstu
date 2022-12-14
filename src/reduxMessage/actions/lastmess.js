import { lastmessAPI } from "../../utils/api";

const actions = {

    setLastMessage: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),

    fetchDialogs: () => dispatch => {
        lastmessAPI.getLastMessage().then(({ data }) => {
            dispatch(actions.setLastMessage(data))
        })
    }
}

export default actions