import './Commit.scss';


function Commit({ icon, listBlockText, del }) {

    return (
        <div className='commit' key={listBlockText}>
            <div className='commit__info'>
                {icon}
                {listBlockText}
            </div>

            <div>
                {del}
            </div>

        </div>
    )
};

export default Commit;