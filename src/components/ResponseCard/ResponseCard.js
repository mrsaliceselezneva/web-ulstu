import "./ResponseCard.scss"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from 'axios'
import userSlice from "../../redux/slices/userSlice";

const ResponseCard = ({ comment, project, user, date }) => {

    const { token } = useSelector(state => state.userReducer);
    const [avatar, setAvatar] = useState("")

    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(`${process.env.REACT_APP_API_URL}/files?id=${user.avatarId}`, { headers, responseType: 'blob' })
            .then((response) => {
                const url = window.URL.createObjectURL(response.data);
                setAvatar(url);
            })

    }, [])

    const [confirm, setConfirm] = useState([])
    const [reject, setReject] = useState([])

    const onConfirm = async (obj) => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/project/response/confirm`, obj.id)
            setConfirm((prev) => [...prev, data]);
            alert("Пользователь принят")

        } catch (error) {
            alert("Не удалось принять пользователя")
        }
    }

    const onReject = async (obj) => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/project/response/confirm`, obj.id)
            setConfirm((prev) => [...prev, data]);
            alert("Пользователь отклонён")

        } catch (error) {
            alert("Не удалось отклонить пользователя")
        }
    }

    return (
        <div className="response__card__container">

            <div className="response__card__avatar">
                <img src={avatar} alt="Avatar" />
            </div>

            <div className="response__card__user">
                <span>{user.firstName} {user.lastName}</span>
            </div>

            <div className="response__card__project">
                <span> {project.name}</span>
            </div>

            <div className="response__card__message">
                <span>{comment}</span>
            </div>

            <div className="response__card__accept"
                onClick={onConfirm}>
                <span>Принять</span>
            </div>

            <div className="response__card__reject"
                onClick={onReject}>
                <span>Отклонить</span>
            </div>

            <div className="response__card__date">
                <span>{date}</span>
            </div>

        </div>
    )
}

export default ResponseCard