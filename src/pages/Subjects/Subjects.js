import SubjectsCard from '../../components/ProjectCard/ProjectCard';
import './Subjects.scss';
import img from '../../components/assets/images/default_project_background.png'
import { FiUser } from 'react-icons/fi';

const data = [
    {
        subject: "Исследование операций",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",


    },
    {
        subject: "Основы автоматики",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },
    {
        subject: "Геометрическое моделирование",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },
    {
        subject: "Операционные системы",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },
    {
        subject: "Средства электронного обучения",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },
    {
        subject: "Исследование операций",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },
    {
        subject: "Основы автоматики",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },
    {
        subject: "Геометрическое моделирование",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },
    {
        subject: "Операционные системы",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },
    {
        subject: "Средства электронного обучения",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },
    {
        subject: "Исследование операций",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",

    },]



function Subjects() {
    return (
        <div className='sudjects__container'>
            <div className='sudjects__header'>
                <h1>Предметы</h1>
                <div className='sudjects__header__info'>
                    <span>ИВТАСбд-31</span>
                    <span>5 семестр</span>
                </div>

            </div>
            <div className='sudjects__body'>
                {data.map((item) => (<SubjectsCard {...item} />))}
            </div>
        </div>
    );
}

export default Subjects;
