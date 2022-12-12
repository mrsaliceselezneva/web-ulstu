import './Event.scss';
import img from '../../components/assets/images/default_project_background.png'
import { FiUser } from 'react-icons/fi';

function Project() {

    const data =
    {
        subject: "Геометрическое моделирование",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    }

    return (
        <div className='card__container'
            onClick={() => {
                window.location.assign(
                    `${process.env.REACT_APP_URL}/projects/project/12345`
                );
            }}>
            <div className='card__header'>
                <img src={data.image} alt="Subjects" />
            </div>

            <div className='card__body'>

                <div className='card__body__title'>
                    <span>{data.subject}</span>
                </div>

                <div className='card__body__teacher'>

                    <div className='card__body__teacher__icon'>
                        <span>{data.icon}</span>
                    </div >

                    <div className='card__body__teacher__span'>
                        <span>{data.teacher}</span>
                    </div >
                </div>

                <div className='card__body__content'>
                    {data.content}
                </div>
                {/* 
            <div className='card__body__type'>
                <div className={type === "Экзамен" ? 'card__body__type__examen' : 'card__body__type__zachet'}>
                    <span>{type}</span>
                </div>
            </div> */}

            </div>

        </div>
    );
}

export default Project;
