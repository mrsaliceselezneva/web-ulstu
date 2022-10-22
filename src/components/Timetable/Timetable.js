import Drawer from "../../components/Drawer/Drawer"
import Header from "../../components/Header/Header"
import TimeTableContent from "../../components/TimeTableContent/TimeTableContent"
import TimeTableHeader from "../../components/TimeTableHeader/TimeTableHeader"


const Timetable = () => {
    return (
        <div className="timetable_container">
            <Drawer>
                <Header />
                <TimeTableHeader />
                <TimeTableContent />
            </Drawer>
        </div>
    )
}

export default Timetable;