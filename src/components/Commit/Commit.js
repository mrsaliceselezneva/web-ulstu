import './Commit.scss';


function Commit({ icon, listBlockText, del }) {

    return (
        <div className='commit'>
            {icon}
            {listBlockText}
            {del}
        </div>
    )
};

export default Commit;