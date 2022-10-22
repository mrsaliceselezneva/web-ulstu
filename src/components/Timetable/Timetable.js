import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";
import TimeTableHeader from "../TimeTableHeader/TimeTableHeader";
import TimeTableContent from "../TimeTableContent/TimeTableContent"


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