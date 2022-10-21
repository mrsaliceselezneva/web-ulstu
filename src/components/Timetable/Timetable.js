import Drawer from "../Drawer/Drawer";

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