import './Commit.scss';

function Commit ({icon, listBlockText}) { 
    return (
       <div className='commit'>
           {icon}
           {listBlockText}
       </div> 
    )
};

export default Commit;