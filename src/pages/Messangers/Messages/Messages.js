import PropTypes from "prop-types"
import { Empty, Spin } from "antd"
import Message from '../Message/Message';
import classNames from "classnames"
import './messages.scss'

const Messages = ({ blockRef, isLoading, items, userId }) => {
    
    return (

        <div ref={blockRef}
            className={classNames("messages", { "messages--loading": isLoading })}>
            {isLoading ? (
                <Spin tip="Идет загрузка..." />

            ) : items && !isLoading ? (
                items.length > 0 ? (
                    items.map(item => <Message {...item} key={item.id} userId={userId}/>)

                ) : (
                    <Empty image={null} description="Начните диалог" />
                )) : (
                <Empty image={null} description="Начните диалог" />
            )

            }
        </div>
    )

}

Messages.propTypes = {
    items: PropTypes.array
}

export default Messages