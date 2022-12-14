import { axios } from "../../core"

export default {

    getAll: () => {
        return (
            axios.get(`${process.env.REACT_APP_API_URL}/chat/get-all-user?token=${window.localStorage.token}`, { headers: { Authorization: null } })
        )

    }
}


