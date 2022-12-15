import './DeleteProject.scss';

function DeleteProject({ icon, deleteText, del }) {
    return (
        <div className='delete-project-block'>
            {icon}
            {deleteText}
            {del}
        </div>
    )
};

export default DeleteProject;