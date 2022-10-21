import "./teacherAnswers.scss"

const TeacherAnswers = (props) => {
    return (
        <div className="answers_item">

            <div className="answer_icon">{props.image}</div>

            <div className="answer_teacher">{props.teacher}</div>

            <div className="answer_date">{props.date}</div>

            <div className="answer_time">{props.time}</div>

            <div className="answer_comment">{props.comment}</div>

        </div>
    )
}

export default TeacherAnswers