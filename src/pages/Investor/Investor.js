import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import SponsorTerms from "../../components/SponsorTerms/SponsorTerms";
import './Investor.scss'
import { FiChevronsLeft, FiDollarSign } from 'react-icons/fi';
import defaultBackground from '../../components/assets/images/inv.svg';

const Investor = () => {


    const [sponsorTerms, setSponsorTerms] = useState([])
    const [description, setDescription] = useState("")
    const [investmentBudget, setInvestmentBudget] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate();



    let { search } = useLocation();
    const params = new URLSearchParams(search);
    const id = params.get('id');

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/sponsor/?id=${id}`)
            .then((response) => {
                setSponsorTerms(response.data.sponsorTerms)
                setDescription(response.data.description)
                setInvestmentBudget(response.data.investmentBudget)
                setName(response.data.name)

            });
    }, []);


    return (
        <div className="investor">

            <div className="backlink" onClick={() => navigate(-1)}>
                <div className={'icon'}><FiChevronsLeft /><span>Назад</span></div>
            </div>


            <div className="investor__container">

                <div className="investor__container__image">
                    <img src={defaultBackground} alt="Investor" />
                </div>


                <div className="investor__container__info">

                    <div className="investor__container__info__name">
                        <span>
                            {name}
                        </span>
                    </div>


                    <div className="investor__container__info__description">
                        <span>
                            {description}
                        </span>
                    </div>

        
                    <div className='investor-card__body__budget'>

                        <div className='investor__container__info__budge__icon'>
                            {<FiDollarSign />}
                        </div >

                        <div className='investor__container__info__budge__span'>
                            <b> Бюджет:  </b>{investmentBudget}  руб.
                        </div>

                    </div>
                </div>
            </div>

            <div className="investor__container__terms">
                <span className="investor__container__terms__title">Требования</span>
                {
                    sponsorTerms && sponsorTerms.map((term) => (
                        <SponsorTerms
                            name={term.name}
                            description={term.description} />
                    ))
                }
            </div>



        </div>
    )
}

export default Investor