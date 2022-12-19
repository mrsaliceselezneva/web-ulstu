import { axios } from "../../core"

export default {
    getAllByDialogId: id =>axios.get(`${process.env.REACT_APP_API_URL}/chat/get-chat?token=${window.localStorage.token}&innterviewer_id=${id}`, { headers: { Authorization: null } })
}
    