import SubjectsCard from '../../components/SubjectsCard/SubjectsCard';
import './Subjects.scss';
import img from '../../components/assets/images/subject.svg'
import { FiUser, FiCalendar, FiUserPlus, FiCheckSquare } from 'react-icons/fi';

const data = [
    {
        subject: "Исследование операций",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Экзамен"

    },
    {
        subject: "Основы автоматики",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Зачет"
    },
    {
        subject: "Геометрическое моделирование",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Зачет"
    },
    {
        subject: "Операционные системы",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Экзамен"
    },
    {
        subject: "Средства электронного обучения",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Экзамен"
    },
    {
        subject: "Исследование операций",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Зачет"
    },
    {
        subject: "Основы автоматики",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Зачет"
    },
    {
        subject: "Геометрическое моделирование",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Экзамен"
    },
    {
        subject: "Операционные системы",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Экзамен"
    },
    {
        subject: "Средства электронного обучения",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Зачет"
    },
    {
        subject: "Исследование операций",
        image: img,
        icon: <FiUser />,
        teacher: "Горшков Д.А.",
        content: "Решить 25 задач по программированию. Сдать письменный зачет.",
        type: "Экзамен"
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
