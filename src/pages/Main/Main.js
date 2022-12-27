import './Main.scss';
import Base from '../../components/assets/images/Base.png';
import emoji from '../../components/assets/images/emoji.png';
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from "axios"


import Status from '../../components/Status/Status';
import TeacherAnswers from '../../components/TeacherAnswers/TeacherAnswers';
import Productive from '../../components/Productive/Productive';
import Progress from "../../components/Progress/Progress";

function Main() {

    const data = [

        { "count": 9, "status": "Просроченных работ", "imgUrl": "../images/statusImg1.svg" },
        { "count": 25, "status": "Тестов и лекций пройдено", "imgUrl": "/images/statusImg2.svg" },
        { "count": "83%", "status": "Сдано работ за семестр", "imgUrl": "/images/statusImg3.svg" }

    ]

    const [rating, setRating] = useState([])
    const [competence, setCompetence] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/project/top-views`)
            .then((response) => {
                setRating(response.data)
            });
        axios
            .get(`${process.env.REACT_APP_API_URL}/verification/api/metrics/v1/q/?userId=1`)
            .then((response) => {
                setCompetence(response.data)
            });
    }, [])

    return (
        <div className="content_info">



            <div className="middle_container">

                <div className="middle_group">

                    <div className="middle_image">

                        <img src={Base} alt="main" />

                    </div>

                    <div className="answers">
                        <h1>Прогресс</h1>
                        <Progress data={competence} />
                    </div>


                    {/* <div className="status">
                        {
                            data.map((value, index) => (
                                <Status
                                    key={index}
                                    count={value.count}
                                    status={value.status}
                                    imgUrl={value.imgUrl}
                                />
                            ))
                        }
                    </div> */}

                </div>

            </div>

            <div className="footer_container">
                <div className="productive">
                    <div className='h1'>Продуктивность обучения</div>
                    <Productive data={competence} />
                </div>

                <div className="rating">

                    <h1>Рейтинг проектов</h1>
                    <div className={rating.length > 0 ? "top_views" : "no_projects"}>

                        {
                            rating.length > 0 ?
                                rating.map((item) => <TeacherAnswers key={item.id}
                                    {...item} />)
                                :
                                <>
                                    <img alt="emoji" src={emoji} />
                                    <span>У Вас нет своих проектов</span>
                                    <div className='no_projects__button'
                                        onClick={() => {
                                            window.location.assign(
                                                `${process.env.REACT_APP_URL}/projects/create-project`
                                            );
                                        }}
                                    >
                                        Создать проект
                                    </div>
                                </>
                        }
                    </div>

                </div>

            </div>





        </div>
    )
}

export default Main;