import './Commit.scss';

function Commit({ icon, listBlockText, del }) {
    return (
        <div className='commit' key={listBlockText}>
            {icon}
            {listBlockText}
            {del}
        </div> 
    )
};

export default Commit;