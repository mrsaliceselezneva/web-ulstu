import { axios } from "../../core"

export default {

    getAllUsers: () => {
        return (
            axios.get(`${process.env.REACT_APP_API_URL}/user/list`)
        )

    }
}
