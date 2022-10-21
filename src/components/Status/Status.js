import './status.scss'

const Status = (props) => {



    return (
        <div className="status_container">

            <img src={props.imgUrl} width={70} height={70} alt="Status" />

            <div className="status_text">
                <h2>{props.count}</h2>
                <span>{props.status}</span>
            </div>
        </div>
    )
}

export default Status