import ResponseCard from "../../components/ResponseCard/ResponseCard"
import './ResponseList.scss'

const ResponseList = () => {

    return (
        <div className="response__container">

            <div className="response__title">
                <h1>Список откликов</h1>
            </div>

            <ResponseCard />
        </div>
    )
}

export default ResponseList