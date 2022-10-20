import Drawer from "../Drawer/Drawer";
import Header from "../Header/Header";
import Info from "../Info/Info";
import './MainPage.scss';

const MainPage = () => {
    return(
       
    <div>
        <style>{'body { background-color: #E5E5E5; background-image: none;}'}</style>
        <Drawer>
            <Header />
            <Info/>
       </Drawer>
    </div>
    )
}

export default MainPage;