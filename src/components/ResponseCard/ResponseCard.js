import "./ResponseCard.scss"
import Time from '../../components/Time/Time'

const ResponseCard = ({ comment, project, user, date }) => {


    return (
        <div className="response__card__container">

            <div className="response__card__avatar">
                <img src={user.avatarId} />
            </div>

            <div className="response__card__user">
                <span>{user.firstName} {user.lastName}</span>
            </div>

            <div className="response__card__project">
                <span> {project.name}</span>
            </div>

            <div className="response__card__message">
                <span>{comment}</span>
            </div>

            <div className="response__card__accept">
                <span>Принять</span>
            </div>

            <div className="response__card__reject">
                <span>Отклонить</span>
            </div>

            <div className="response__card__date">
                <span>{date}</span>
            </div>

        </div>
    )
}

export default ResponseCard