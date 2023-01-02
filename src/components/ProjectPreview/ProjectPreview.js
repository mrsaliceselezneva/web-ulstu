import "./ProjectPreview.scss"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from 'axios'
import { FiUserCheck } from 'react-icons/fi'

const ProjectPreview = ({ name, countViews, previewId, id }) => {


    const { token } = useSelector(state => state.userReducer);
    const [avatar, setAvatar] = useState("")

    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(`${process.env.REACT_APP_API_URL}/files?id=${previewId}`, { headers, responseType: 'blob' })
            .then((response) => {
                const url = window.URL.createObjectURL(response.data);
                setAvatar(url);
            })

    }, []);

    return (
        <div className="answers_item" onClick={() => {
            window.location.assign(`${process.env.REACT_APP_URL}/projects/project/?id=${id}`);
        }}>

            <div className="answer_icon">
                <img src={avatar} alt="avatar" />
            </div>

            <div className="answer_teacher">{name}</div>

            <div className="answer_date">{countViews}</div>


        </div>
    )
}

export default ProjectPreview;