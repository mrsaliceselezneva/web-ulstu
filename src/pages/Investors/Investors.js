import axios from "axios";
import { useState, useEffect } from "react";
import Investor from "../../components/Investor/Investor";
import Search from "../../components/Search/Search";
import "./Investors.scss"


const Investors = () => {

    const [investors, setInvestors] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {

        axios
            .get(`${process.env.REACT_APP_API_URL}/sponsor/list`)
            .then((response) => {
                setInvestors(response.data);

            });
    }, []);

    const searchInvestors =
        investors.filter((value) => {
            return (value.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        }).map((value) => <Investor
            logoId={value.logoId}
            id={value.id}
            name={value.name}
            email={value.email}
            description={value.description}
            investmentBudget={value.investmentBudget}
        />);


    return (
        <div className='investors'>
            <div className='investors-menu'>
                <Search
                    width={20}
                    heigth={20}
                    placeholder="Поиск спонсора"
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <div className='choose'>
                </div>
            </div>
            <div className='list'>
                {searchInvestors.map((investor, id) => (investor))}
            </div>
        </div>
    )
}

export default Investors