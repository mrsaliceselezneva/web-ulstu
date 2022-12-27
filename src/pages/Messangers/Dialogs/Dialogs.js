import DialogItem from "../DialogItem/DialogItem"
import React from "react";
import axios from "axios";
import "./dialogs.scss"
import orderBy from 'lodash/orderBy'
import { SearchOutlined } from "@ant-design/icons"
import { Input, Empty, Search } from "antd"
import { useSelector, useDispatch } from "react-redux";
import { loginFirstName, loginLastName, loginFutherName, loginGroup, loginToken } from "../../../redux/slices/userSlice";

const Dialogs = ({ items, userId, inputValue, onSearch, currentDialogId, onSelectDialog}) => {


    const { token, firstName, lastName, futherName, group } = useSelector(state => state.userReducer);


    return (
        <div className='dialogs'>

            <div className="dialogs__search">
                <input
                    placeholder="Поиск чата"
                    onChange={event => onSearch(event.target.value)}
                    value={inputValue}
                />
                <SearchOutlined />
            </div>

            <div className="dialogs__itembar">
                {items.length ? (
                    orderBy(items, ["datetime"], ["desc"]).map(item => (
                        <DialogItem
                            onSelect={onSelectDialog}
                            key={item.id}
                            // isMe={item.user.id === userId}
                            userId={userId}
                            // message={item}
                            unreaded={0}
                            // user={item.user}
                            // currentDialogId={currentDialogId}
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
