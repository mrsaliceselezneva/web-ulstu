import { useState } from "react"
import "./timetableHeader.scss"

const TimeTableHeader = () => {

    const [isActive, setIsActive] = useState(false)
    const options = ["1 неделя", "2 неделя"]
    const [selected, setSelected] = useState(`${options[0]}`)

    const data = {
        month: "Октябрь",
        year: "2022",
        group: "ИВТАСбд-31"
    }


    return (
        <div className="timetable_header">

            <div className="leftPart">
                <h2>{`${data.month} 2-8, ${data.year}`}</h2>
                <div className="timeTableArrows">
                    <img src="./images/leftArrowTimeTable.svg" alt="left" />
                    <img src="./images/rightArrowTimeTable.svg" alt="right" />
                </div>

            </div>

            <div className="rightPart">

                <div className="dropDown">

                    <div className="dropDownBtn"
                        onClick={() => setIsActive(!isActive)}>
                        {selected}
                        <img src="/images/dropdownArrow.svg" alt="arrow" />
                    </div>

                    {
                        isActive && <div className="dropDownContent">
                            {options.map(option => (
                                <div onClick={(e) => {
                                    setSelected(option)
                                    setIsActive(false)
                                }}
                                    className='dropDownItem'>{option}</div>
                            ))}


                        </div>

                    }
                </div>

                <div className="timeTableGroup">
                    {`Группа: ${data.group}`}
                </div>

            </div>

        </div >
    )
}

export default TimeTableHeader