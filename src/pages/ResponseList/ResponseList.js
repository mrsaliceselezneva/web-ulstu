import ResponseCard from "../../components/ResponseCard/ResponseCard"
import './ResponseList.scss'
import img from "../../components/assets/images/avatar.png"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from "axios"

const ResponseList = () => {

    const data = [
        {
            name: "Максим",
            surname: "Дергунов",
            avatar: img,
            project: "Умный велосипедУмный велосипедУмный велосипедУмный велосипед",
            message: "тестовое сообщениетестовое сообщениетестовое сообщениетестовое сообщениетестовое сообщениетестовое сообщение",
            date: "06.12.22"

        },
        {
            name: "Максим",
            surname: "Дергунов",
            avatar: img,
            project: "Умный велосипедУмный велосипедУмный велосипедУмный велосипед",
            message: "тестовое сообщениетестовое сообщениетестовое сообщениетестовое сообщениетестовое сообщениетестовое сообщение",
            date: "06.12.22"

        }
    ]
    const { token } = useSelector(state => state.userReducer);
    const [response, setResponse] = useState([])

    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(`${process.env.REACT_APP_API_URL}/project/response/list`, { headers })
            .then((response) => {
                setResponse(response.data)
            })
    }, [])

    return (
        <div className="response__container">

            <div className="response__title">
                <h1>Список откликов</h1>
            </div>

            {response.map((item) => <ResponseCard

                {...item} />)}
        </div>
    )
}

export default ResponseList