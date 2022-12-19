import './ModalDeleteProject.scss';

function ModalDeleteProject(props) {
    if (!props.showModalDeleteProject){
        return null;
    }
    else{
        return (
            <div className='modal' onClick={props.saveProjectButton}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-content'>
                        <div className='modal-title'> 
                            Удалить проект?
                        </div>
                        <div className='modal-body'>
                        </div>
                        <div className='modal-footer'>
                            <button className='button' onClick={props.deleteProjectButton}>да</button>
                            <button className='button' onClick={props.saveProjectButton}>нет</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ModalDeleteProject;