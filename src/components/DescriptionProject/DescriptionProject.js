import './DescriptionProject.scss';

function DescriptionProject(props) {
    if (!props.showModalDescriptionProject){
        return null;
    }
    else{
        return (
            <div className='modal' onClick={props.onClose}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-content'>
                        <div className='modal-title'> 
                            маленькое описание
                        </div>
                        <div className='modal-body'>
                            Описание или название слишком короткое. Сделайте описание побольше, чтобы люди могли понять, о чём проект. Добавьте ещё пару слов.
                        </div>
                        <div className='modal-footer'>
                            <button className='button' onClick={props.onClose}>понятно</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default DescriptionProject;
