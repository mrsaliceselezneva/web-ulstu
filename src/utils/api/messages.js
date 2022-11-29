import { axios } from "../../core"

export default {
    getAllByDialogId: id => axios.get('/messages?dialogs=' + id)
}