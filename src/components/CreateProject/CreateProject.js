import './CreateProject.scss';
import { FiPlusCircle, FiLayout, FiToggleLeft, FiToggleRight } from 'react-icons/fi';

function CreateProject(){
    return(
       <div className='create'>
           <input className='name' placeholder='Название проекта' />
           <input className='fio' placeholder='ФИО или название компании' />
           <ipnut className='description' placeholder='Описание проекта' />
           <div className='requirements'>
           </div>
           <button className='create'>Создать</button>
       </div>
    );
}

export default CreateProject;
