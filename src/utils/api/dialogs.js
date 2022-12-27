import { axios } from "../../core"

export default {

    getAll: () => {
        return (
            axios.get(`${process.env.REACT_APP_API_URL}/dialog` )
        )

    }
}


