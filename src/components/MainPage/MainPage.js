import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";
import Info from "../Info/Info";
import './MainPage.scss';

const MainPage = () => {
    return (

        <div>
            <Drawer>
                <Header />
                <Info />
            </Drawer>
        </div>
    )
}

export default MainPage;