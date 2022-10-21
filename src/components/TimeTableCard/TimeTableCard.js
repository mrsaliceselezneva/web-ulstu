import "./timeTableCard.scss"
import BiUser from "react-icons/bi"

const TimeTableCard = () => {

    const color = ["red", "green", "blue"]

    const data = {
        subject: "Исследование операций",
        type: "Лекция",
        teacher: "Горшков Д А",
        build: "2",
        class: "306"
    }

    return (
        <div className="timeTableCardContainer">
            <div className="timeTableCardContent">
                <div className="subjectName">
                    {data.subject}
                </div>

                <div className="subjectInfo">

                    <div className="subjectInfoClass">
                        <div className="subjectInfoClassItem">{`${data.build} - ${data.class}`}</div>
                        <div className="subjectInfoClassItem">

                            {`${data.teacher}`}
                        </div>
                    </div>

                    <div className="subjectInfoType">
                        <div className="subjectInfoTypeItem"><span>{data.type}</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TimeTableCard