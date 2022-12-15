import { lastmessAPI } from "../../utils/api";

const actions = {

    setLastMessage: lastmess => ({
        type: 'DIALOGS:SET_LASTMESSAGE',
        payload: lastmess
    }),

    fetchLastMessage: () => dispatch => {
        lastmessAPI.getLastMessage().then(({ data }) => {
            dispatch(actions.setLastMessage(data))
        })
    }
}

export default actions