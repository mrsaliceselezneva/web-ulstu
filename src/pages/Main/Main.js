import './Main.scss';
import Base from '../../components/assets/images/Base.png';
import emoji from '../../components/assets/images/emoji.png';
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import axios from "axios"


import Status from '../../components/Status/Status';
import TeacherAnswers from '../../components/TeacherAnswers/TeacherAnswers';
import { FiUserCheck } from 'react-icons/fi';
import Visit from '../../components/Visit/Visit';
import Productive from '../../components/Productive/Productive';

function Main() {

    const data = [

        { "count": 9, "status": "Просроченных работ", "imgUrl": "../images/statusImg1.svg" },
        { "count": 25, "status": "Тестов и лекций пройдено", "imgUrl": "/images/statusImg2.svg" },
        { "count": "83%", "status": "Сдано работ за семестр", "imgUrl": "/images/statusImg3.svg" }

    ]


    const { token } = useSelector(state => state.userReducer);
    const [rating, setRating] = useState([])


    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get(`${process.env.REACT_APP_API_URL}/project/top-views`, { headers })
            .then((response) => {
                setRating(response.data)
            })

    }, [])

    return (
        <div className="content_info">



            <div className="middle_container">

                <div className="middle_group">

                    <div className="middle_image">

                        <img src={Base} alt="main" />

                    </div>

                    <div className="status">
                        {
                            data.map(val => (
                                <Status
                                    count={val.count}
                                    status={val.status}
                                    imgUrl={val.imgUrl}
                                />
                            ))
                        }
                    </div>

                </div>

                <div className="productive">
                    <div className='h1'>Продуктивность обучения</div>
                    <Productive />
                </div>

            </div>

            <div className="footer_container">

                <div className="answers">

                    <h1>Рейтинг проектов</h1>
                    <div className={rating.length > 0 ? "top_views" : "no_projects"}>

                        {
                            rating.length > 0 ?
                                rating.map((item) => <TeacherAnswers
                                    {...item} />)
                                :
                                <>
                                    <img src={emoji} />
                                    <span>У Вас нет своих проектов</span>
                                </>
                        }
                    </div>

                </div>

                <div className="visit">
                    <h1>Посещаемость</h1>
                    <Visit />
                </div>

                <div className="rating">
                    <h1>Рейтинг</h1>
                </div>

            </div>





        </div>
    )
}

export default Main;