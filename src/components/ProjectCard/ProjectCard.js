import './ProjectCard.scss';

const ProjectCard = ({ subject, image, icon, teacher, content }) => {

    const [avatar, setAvatar] = useState("")

    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(`${process.env.REACT_APP_API_URL}/files?id=${previewId}`, { headers, responseType: 'blob' })
            .then((response) => {
                const url = window.URL.createObjectURL(response.data);
                setAvatar(url);
            })

    }, [])
    return (
        <div className='card__container'
            onClick={() => {
                window.location.assign(
                    `${process.env.REACT_APP_URL}/projects/project/12345`
                );
            }}>
            <div className='card__header'>
                <img src={avatar} alt="Subjects" />
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
