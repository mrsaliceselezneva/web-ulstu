const initialState = {
    items: [],
    isLoading: false

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DIALOGS:SET_LASTMESSAGE':
            return {
                ...state,
                items: payload
            }
        default:
            return state
    }
}