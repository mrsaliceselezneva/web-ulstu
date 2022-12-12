import DialogItem from "../DialogItem/DialogItem"
import React from "react";
import axios from "axios";
import "./dialogs.scss"
import orderBy from 'lodash/orderBy'
import { SearchOutlined } from "@ant-design/icons"
import { Input, Empty } from "antd"
import { useSelector, useDispatch } from "react-redux";
import { loginFirstName, loginLastName, loginFutherName, loginGroup, loginToken } from "../../../redux/slices/userSlice";

const Dialogs = ({ items, userId, inputValue, onSearch, currentDialogId, onSelectDialog }) => {


    const { token, firstName, lastName, futherName, group } = useSelector(state => state.userReducer);


    return (
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
                            key={item.id}
                            // isMe={item.user.id === userId}
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
}



export default Dialogs;
