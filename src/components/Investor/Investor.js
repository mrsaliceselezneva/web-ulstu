
import { FiMail, FiDollarSign } from 'react-icons/fi';
import './Investor.scss'
import defaultBackground from '../../components/assets/images/inv.svg';

function Investor({ id, logoId, name, description, email, investmentBudget }) {



    return (
        <div className='investor-card__container'
        onClick={() => {
            window.location.assign(
                `${process.env.REACT_APP_URL}/sponsors/sponsor/?id=${id}`
            );
            console.log("acess")
        }}
        >
            <div className='investor-card__header'>
                <img src={logoId.length > 2 ? logoId : defaultBackground} alt="Investor" />
            </div>

            <div className='investor-card__body'>

                <div className='investor-card__body__title'>
                    <span>{name}</span>
                </div>

                <div className='investor-card__body__content'>
                    <span>
                        {description}
                    </span>
                </div>

                <div className='investor-card__body__budget'>

                    <div className='investor-card__body__budget__icon'>
                        {<FiDollarSign />}
                    </div >
                    
                    <div className='investor-card__body__budget__span'>
                        <b> Бюджет:  </b>{investmentBudget}  руб.
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Investor;
