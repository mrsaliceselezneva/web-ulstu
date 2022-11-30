import './Main.scss';
import Base from '../../components/assets/images/Base.png';


import Status from '../Status/Status'
import TeacherAnswers from '../TeacherAnswers/TeacherAnswers'
import { FiUserCheck } from 'react-icons/fi'
import Visit from '../Visit/Visit'
import Productive from '../Productive/Productive'

function Main() {

    const data = [

    {"count": 9 ,"status": "Просроченных работ" , "imgUrl": "../images/statusImg1.svg"},
    {"count": 25 ,"status": "Тестов и лекций пройдено", "imgUrl": "/images/statusImg2.svg" },
    {"count": "83%" ,"status": "Сдано работ за семестр", "imgUrl": "/images/statusImg3.svg" }

    ]


    const answers = [

        {
            "image": <FiUserCheck/>,
            "teacher": "Лылова Анна Вячеслвавовна",
            "date": "22.10.2022",
            "time": "14:40",
            "comment": "Работа №2 принята, исправьте в отчете п.1 и вышлите еще раз."
        }, 

        {
            "image": <FiUserCheck/>,
            "teacher": "Лылова Анна Вячеслвавовна",
            "date": "22.10.2022",
            "time": "14:40",
            "comment": "Работа №2 принята, исправьте в отчете п.1 и вышлите еще раз."
        }, 

        {
            "image": <FiUserCheck/> ,
            "teacher": "Лылова Анна Вячеслвавовна",
            "date": "22.10.2022",
            "time": "14:40",
            "comment": "Работа №2 принята, исправьте в отчете п.1 и вышлите еще раз."
        }
    ]


    
    return (
        <div className="content_info">



            <div className="middle_container">

                <div className="middle_group">

                    <div className="middle_image">

                        <img src='/images/mainImage.png' alt = "main"/>

                    </div>

                    <div className="status">
                    {
                        data.map(val =>(
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

                    <h1>Ответы по сданным работам</h1>
                    {
                        answers.map(answer =>(
                            <TeacherAnswers 
                            image={answer.image}
                            teacher={answer.teacher}
                            date={answer.date}
                            time={answer.time}
                            comment={answer.comment}
                            />
                        ))
                    }
            
                </div> 

                <div className="visit">
                    <h1>Посещаемость</h1>
                    <Visit/>
                </div>
                
                <div className="rating">
                    <h1>Рейтинг</h1>
                </div>

            </div>



         

        </div>
    )
}

export default Main;
