import Messages from './Messages/Messages';
import Status from './Status/Status';
import ChatInput from './ChatInput/ChatInput';

import './Messangers.scss';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from "@ant-design/icons"
import DialogsCont from '../../containers/DialogsCont';
import MessagesCont from '../../containers/MessagesCont';


function Messangers() {

    return (
        <div className='messangers'>

            <div className='chat'>

                <div className='chat__sidebar'>

                    <div className='chat__sidebar__header'>
                        <div className='chat__sidebar__header-info'>
                            <TeamOutlined />
                            <span>Список чатов</span>
                        </div>
                        <FormOutlined />
                    </div>




                    <div className='chat__sidebar__dialogs'>
                        <DialogsCont
                            userId={0}
                        />

                    </div>

                </div>


                <div className='chat__dialog'>

                    <div className='chat__dialog-haeder'>
                        <div />

                        <div className='chat__dialog-haeder-center'>

                            <b className='chat__dialog-haeder-username'>
                                Максим Дергунов
                            </b>
                            <div className='chat__dialog-haeder-status'>
                                <Status online />
                            </div>
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
