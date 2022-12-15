const initialState = {
    lastmess: [],
    isLoading: false

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DIALOGS:SET_LASTMESSAGE':
            return {
                ...state,
                lastmess: payload
            }
        default:
            return state
    }
}