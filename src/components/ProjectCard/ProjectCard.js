import './ProjectCard.scss';

const ProjectCard = ({ subject, image, icon, teacher, content }) => {
    return (
        <div className='card__container'
            onClick={() => {
                window.location.assign(
                    `${process.env.REACT_APP_URL}/projects/project/12345`
                );
            }}>
            <div className='card__header'>
                <img src={image} alt="Subjects" />
            </div>

            <div className='card__body'>

                <div className='card__body__title'>
                    <span>{subject}</span>
                </div>

                <div className='card__body__teacher'>

                    <div className='card__body__teacher__icon'>
                        <span>{icon}</span>
                    </div >

                    <div className='card__body__teacher__span'>
                        <span>{teacher}</span>
                    </div >
                </div>

                <div className='card__body__content'>
                    {content}
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

export default ProjectCard;
