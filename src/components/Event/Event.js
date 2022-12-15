
import { FiUser } from 'react-icons/fi';
import './Event.scss'

function Event({ previewUrl, name, investorSite, beginningDate, endingDate, description }) {



    return (
        <div className='card__container'
        // onClick={() => {
        //     window.location.assign(
        //         `${process.env.REACT_APP_URL}/projects/project/12345`
        //     );
        // }}
        >
            <div className='card__header'>
                <img src={previewUrl} alt="Subjects" />
            </div>

            <div className='card__body'>

                <div className='card__body__title'>
                    <span>{name}</span>
                </div>

                <div className='card__body__teacher'>

                    <div className='card__body__teacher__icon'>
                        <span>{<FiUser />}</span>
                    </div >

                    <div className='card__body__teacher__span'>
                        <a href={investorSite}>Cсылка на источник</a>
                    </div >
                </div>

                <div className='card__body__content'>
                    {description}
                </div>

                <div className='card__body__data'>
                    {`Даты проведения ${beginningDate.length > 1 ? beginningDate : ""}-${endingDate}`}

                </div>

            </div>

        </div>
    );
}

export default Event;
