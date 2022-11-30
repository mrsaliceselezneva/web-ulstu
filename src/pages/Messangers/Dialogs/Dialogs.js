import DialogItem from "../DialogItem/DialogItem"
import "./dialogs.scss"
import orderBy from 'lodash/orderBy'
import { SearchOutlined } from "@ant-design/icons"
import { Input, Empty } from "antd"

const Dialogs = ({ items, userId, inputValue, onSearch, currentDialogId, onSelectDialog }) => (

    <div className='dialogs'>
        <div className="dialogs__search">
            <Input
                placeholder="Поиск чата"
                onChange={e => onSearch(e.target.value)}
                value={inputValue}
            />
            <SearchOutlined />
        </div>

        <div className="dialogs__itembar">
            {items.length ? (
                orderBy(items, ["created_at"], ["desc"]).map(item => (
                    <DialogItem
                        onSelect={onSelectDialog}
                        key={item._id}
                        isMe={item.user._id === userId}
                        userId={userId}
                        message={item}
                        unreaded={0}
                        user={item.user}
                        currentDialogId={currentDialogId}
                        {...item}
                    />
                ))) :
                (
                    <Empty image={null} description="Ничего не найдено" style={{ textAlign: "center", marginTop: "30px", opacity: ".7" }} />
                )}
        </div>
    </div>
)


export default Dialogs;