import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import { useState, useEffect, useSelector } from 'react';
import axios from "axios";
import "./UserSearch.scss"
import UserItem from "../UserItem/UserItem";

const UserSearch = ({ items, inputValue, onSearch, currentDialog, onSelectDialog }) => {

    return (
        <>
            <div className="dialogs__search">
                <input
                    placeholder="Поиск пользователя"
                    onChange={event => onSearch(event.target.value)}
                    value={inputValue}
                />
                <SearchOutlined />
            </div>
            <div className="usersearch__container">


                <div className="usersearch__container__content">
                    {
                        items.map((user) => (<UserItem
                            onSelect={onSelectDialog}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            id={user.id}
                            key={user.id}
                            {...user}

                        />))

                    }
                </div>
            </div>
        </>
    )
}

export default UserSearch