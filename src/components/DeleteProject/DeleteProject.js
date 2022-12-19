
import './DeleteProject.scss';

function DeleteProject({ icon, deleteText }) {
    return (
        <div className='delete-project-block'>
            {icon}
            {deleteText}
        </div>
    )
};

export default DeleteProject;