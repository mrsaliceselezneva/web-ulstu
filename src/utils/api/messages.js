import { axios } from "../../core"

export default {
    getAllByDialogId: recipientId =>axios.get(`${process.env.REACT_APP_API_URL}/dialog/${recipientId}`),
    send: (message, recipientId) =>
    axios.post(`${process.env.REACT_APP_API_URL}/dialog/${recipientId}`, {message: message})
   
}
    