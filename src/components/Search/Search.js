import './Search.scss';
import { FiSearch } from 'react-icons/fi';

function Search(props){
    return(
        <>
            <style>
                {`.search{ width: ${props.width}vw; height: ${props.height}px;}
                .input{width: ${props.width / 8 * 7}vw;}`}
            </style>
            <form className='search' action="" method="get">
                <input className='input' name="search" placeholder={props.placeholder} type="search" />
                <FiSearch onClick={(event) => {
                    console.log("search");
                }} className='icon' />
            </form>
        </>
    );
}

export default Search;
