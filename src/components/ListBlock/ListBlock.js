import './ListBlock.scss';

function ListBlock ({icon, listBlockText}) { 
    return (
       <div className='list-block'>
           {icon}
           {listBlockText}
       </div> 
    )
};

export default ListBlock;