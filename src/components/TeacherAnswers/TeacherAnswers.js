import "./teacherAnswers.scss"
import { FiUserCheck } from 'react-icons/fi'

const TeacherAnswers = (props) => {
    return (
        <div className="answers_item">

            <div className="answer_icon">{props.image}</div>

            <div className="answer_teacher">{props.name}</div>

            <div className="answer_date">{props.countViews}</div>


        </div>
    )
}

export default TeacherAnswers