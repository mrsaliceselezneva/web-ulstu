import Messages from './Messages/Messages';
import Status from './Status/Status';
import ChatInput from './ChatInput/ChatInput';

import { useSelector, useDispatch } from "react-redux";

import './Messangers.scss';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from "@ant-design/icons"
import DialogsCont from '../../containers/DialogsCont';
import MessagesCont from '../../containers/MessagesCont';

import { useEffect, useState } from 'react';
import UserSearch from '../../components/UserSearch/UserSearch';
import UserSearchCont from '../../containers/UserSearchCont';


function Messangers() {


    const [modalActive, setModalActive] = useState(true)
    const { items, currentDialogId } = useSelector(state => state.dialogs);
    const users = useSelector(state => state.users)
    const [user, setUser] = useState({})

    useEffect(() => {
        if (items) {
            setUser(items.filter((item) => item.id === currentDialogId)[0])
        }
    }, [currentDialogId])
    

    useEffect(() => {
        if (users.items) {
            setUser(users.items.filter((item) => item.id === users.currentDialogId)[0])
        }
    }, [ users.currentDialogId])
    return (
        <div className='messangers'>

            <div className='chat'>

                <div className='chat__sidebar'>

                    <div className='chat__sidebar__header'>
                        <div className='chat__sidebar__header-info'>
                            <TeamOutlined />
                            <span>Список чатов</span>
                        </div>
                        <FormOutlined
                            onClick={() => setModalActive(!modalActive)} />
                    </div>
                    {/* <UserSearch
                            userSearchActive={modalActive}
                            setUserSearchActive={setModalActive}
                        /> */}
                    {
                        modalActive

                            ? <div className='chat__sidebar__dialogs'>
                                <DialogsCont />

                            </div>
                            :
                            <div className='chat__sidebar__users'>

                                <UserSearchCont />
                            </div>
                    }

                </div>

                <div className='chat__dialog'>

                    <div className='chat__dialog-haeder'>
                        <div />

                        <div className='chat__dialog-haeder-center'>

                            <b className='chat__dialog-haeder-username'>
                                {user?.firstName} {user?.lastName}
                            </b>
                            {/* <div className='chat__dialog-haeder-status'>
                                <Status online />
                            </div> */}
                        </div>
                        <EllipsisOutlined style={{ fontSize: "36px", opacity: ".5" }} />
                    </div>

                    <div className='chat__dialog-messages'>
                        <MessagesCont />
                    </div>

                    <div className='chat__dialog-input'>
                        <ChatInput />

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Messangers;