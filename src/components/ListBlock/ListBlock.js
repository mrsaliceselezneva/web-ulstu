import './ListBlock.scss';

function ListBlock ({icon, listBlockText, del}) { 
    return (
       <div className='list-block'>
           {icon}
           {listBlockText}
           {del}
       </div> 
    )
};

export default ListBlock;