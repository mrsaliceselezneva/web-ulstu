import { axios } from "../../core"
import { useSelector } from "react-redux";

export default {

    getAll: () => axios.get("/dialogs")
}


