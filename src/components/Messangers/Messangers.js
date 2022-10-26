import Message from './Message/Message';
import './Messangers.scss';

function Messangers() {

    return (
        <div className='messangers'>
            <Message
                avatar="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
                text=" Тестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщение"
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
                text="Тестовое сообщение Тестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщениеТестовое сообщение"
                date={new Date()}
                isMe={true}
                isChecked={true}
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
                isTyping
            />

            <Message
                avatar="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
                attachments={[
                    {
                        filename: "test.doc",
                        url: "https://randompicturegenerator.com/img/cat-generator/ge7ff6fe5d501da774950bdc29dbec73fa02b97c29256ed12aa9a34f0a15b2f5402611fb6fe459d65da603547e312e3e2_640.jpg"
                    }
                ]}
            />


        </div>
    );
}

export default Messangers;
