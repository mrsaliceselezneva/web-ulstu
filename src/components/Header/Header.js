import './header.scss'
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
    
    const data =  {
            "id": 2,
            "login": "user1",
            "email": "anton@email.com",
            "firstName": "Антон",
            "lastName": "Мамакин",
            "patronymic": "Сергеевич",
            "phone": "001",
            "avatarId": null,
            "userContactIds": [
                1,
                2
            ],
            "studyGroupId": 1,
            "departmentId": null,
            "role": "USER"
        }
    


    return (

        <header className="header"> 

            <div className="search">
                <img className="search_icon" src="/images/search.svg" width={18} height={18} alt="Search" />
                <input placeholder="Поиск..." />
            </div>

            <div className="header_info">

                <div className="info_main">
                    <span>{data.firstName} {data.lastName}</span>
                    <p className="opacity-5">Студент</p>
                </div>

                <img className="main_img"  src="/images/main.png" alt="main" />
    

                <div className="action">
        
                    <img height={30} width={30} src="/images/push.svg" alt="push" />
                    <img height={30} width={30} src="/images/logout.svg" alt="logout" />

                </div>

            </div>

            {/* 

                
            </div>
    
            <div className={styles.info}>

                <div>
                    <span>{data.firstName} {data.lastName}</span>
                    <p className="opacity-5">Студент</p>
                </div>
    
                <img className={styles.mainImg} width={52} height={52} src="/images/main.png" alt="main" />
    

                    <div className={styles.action}>
                        
                        <img src="/images/push.svg" alt="push" />
                        <img src="/images/logout.svg" alt="logout" />
                    </div>

            </div> */}
          

      
        </header>
            
    )
}

export default Header