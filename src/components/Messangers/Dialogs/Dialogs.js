import classNames from "classnames"
import DialogItem from "../DialogItem/DialogItem"
import "./dialogs.scss"
import orderBy from 'lodash/orderBy'
import { isToday } from "date-fns"

const Dialogs = ({ items, userId }) => (

    <div className='dialogs'>
        {
            orderBy(items, ["created_at"], ["desc"]).map(item => (
                <DialogItem
                    key={item._id}
                    isMe={item.user._id === userId}
                    userId={userId}
                    message={item}
                    unreaded={0}
                    user={item.user}
                />
            ))}

        {/* {orderBy(items, ["created_at"], ["desc"]).map(item => (
            <DialogItem
                key={item._id}
                user={item.user}
                
                isMe={item.user._id === userId}
            /> */}

    </div>
)

export default Dialogs