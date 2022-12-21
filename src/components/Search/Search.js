import axios from "axios";
import './Search.scss';
import { FiSearch } from 'react-icons/fi';

function Search(props) {

    function getFromBack(value){
        props.setShowAllProjects(false);
        axios
            .get(`${process.env.REACT_APP_API_URL}/project/list?search=${value}`)
            .then((response) => {
                console.log(response.data);
                props.setProjects(response.data);
            });
            props.setSearchValue(value);
    }

    if(props.showAllProjects){
        getFromBack('');
    }

    return (
        <>
            <style>
                {`.search{ width: ${props.width}vw; height: ${props.height}px;}
                .input{width: ${props.width / 8 * 7}vw;}`}
            </style>
            <form className='search' action="" method="get" onClick={e => e.stopPropagation()}> 
                <input
                    value={props.searchValue}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    className='input' name="search" placeholder={props.placeholder} type="search" />
                <FiSearch className='icon' onClick={() => {getFromBack(props.searchValue)}} />
            </form>
        </>
    );
}

export default Search;