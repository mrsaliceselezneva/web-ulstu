import { axios } from "../../core"

export default {

    getAll: () => {
        return (
            axios.get(`${process.env.REACT_APP_API_URL}/chat/get-all-user?token=${window.localStorage.token}`, { headers: { Authorization: null } })
            //axios.get(`${process.env.REACT_APP_API_URL}/chat/get-chats?token=${window.localStorage.token}`, { headers: { Authorization: null } })
        )

    }
}


