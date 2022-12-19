import { axios } from "../../core"

export default {

    getLastMessage: () => {
        return (
            axios.get(`${process.env.REACT_APP_API_URL}/chat/get-chats?token=${window.localStorage.token}`, { headers: { Authorization: null } })
        )

    }
}
