import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs/Dialogs';
import Message from './Message/Message';
import './Messangers.scss';

function Messangers() {

    return (
        <div className='messangers'>

            <div className='dialogs'>

                <Dialogs
                    userId={0}
                    items={[
                        {
                            _id: Math.random(),
                            text: "Последнее сообщение",
                            //isReaded: false,
                            created_at: new Date(),
                            user: {
                                _id: 1,
                                fullname: "Кирилл Святов",
                                avatar: null
                            }
                        },
                        {
                            _id: Math.random(),
                            text: "Последнее сообщение",
                            //isReaded: false,
                            created_at: "Mon July 11 2019 21:23:21",
                            user: {
                                _id: 1,
                                fullname: "Максим Дергунов",
                                avatar: "https://randomwordgenerator.com/img/picture-generator/54e1d7444c51ab14f1dc8460962e33791c3ad6e04e507441722a72d39f45c5_640.jpg"
                            }
                        },
                        {
                            _id: Math.random(),
                            text: "Последнее сообщение",
                            //isReaded: false,
                            created_at: new Date(),
                            user: {
                                _id: 1,
                                fullname: "Максим Дергу",
                                avatar: "https://randomwordgenerator.com/img/picture-generator/54e1d7444c51ab14f1dc8460962e33791c3ad6e04e507441722a72d39f45c5_640.jpg"
                            }
                        }

                    ]} />
            </div>

            {/* <Dialogs items={[
                {
                    user: {
                        fullname: "Кирилл Святов",
                        avatar: null
                    },
                    message: {
                        text: "За выдающиеся успехи в программировании, Вам назначена стипендия. Классно? Классно!",
                        isReaded: false,
                        created_at: new Date()
                    }

                }
            ]} /> */}
            {/* <Message
                avatar="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
                text=" Тестовое сообщение"
                date={new Date()}
                isMe={false}
                attachments={[
                    {
                        filename: "test.doc",
                        url: "https://randomwordgenerator.com/img/picture-generator/54e1d7444c51ab14f1dc8460962e33791c3ad6e04e507441722a72d39f45c5_640.jpg"
                    },
                    {
                        filename: "test.doc",
                        url: "https://randomwordgenerator.com/img/picture-generator/54e1d1444d50b10ff3d8992cc12c30771037dbf85254794075297ad39f45_640.jpg"
                    },
                    {
                        filename: "test.doc",
                        url: "https://randomwordgenerator.com/img/picture-generator/54e0d4434c57a514f1dc8460962e33791c3ad6e04e5074417c2d78d1934ec1_640.jpg"
                    },
                ]}
            />

            <Message
                avatar="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"
                text="Тестовое сообщение"
                date={new Date()}
                isMe={true}
                isReaded={true}
                attachments={[
                    {
                        filename: "test.doc",
                        url: "https://randomwordgenerator.com/img/picture-generator/54e1d7444c51ab14f1dc8460962e33791c3ad6e04e507441722a72d39f45c5_640.jpg"
                    },
                    {
                        filename: "test.doc",
                        url: "https://randomwordgenerator.com/img/picture-generator/54e1d1444d50b10ff3d8992cc12c30771037dbf85254794075297ad39f45_640.jpg"
                    },
                    {
                        filename: "test.doc",
                        url: "https://randomwordgenerator.com/img/picture-generator/54e0d4434c57a514f1dc8460962e33791c3ad6e04e5074417c2d78d1934ec1_640.jpg"
                    },
                ]}

            />


            <Message
                avatar="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
                attachments={[
                    {
                        filename: "test.doc",
                        url: "https://randompicturegenerator.com/img/cat-generator/ge7ff6fe5d501da774950bdc29dbec73fa02b97c29256ed12aa9a34f0a15b2f5402611fb6fe459d65da603547e312e3e2_640.jpg"
                    }
                ]}
            /> */}


        </div>
    );
}

export default Messangers;
