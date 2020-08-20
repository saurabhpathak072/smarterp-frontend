import React, { useContext,useState } from 'react'
import classes from './SearchBox.module.css';
import {globalContext} from '../../GlobalContext/GlobalContext';

const SearchBox=()=>{
    const [searchTitle, setsearchTitle] = useState('')
    const value=useContext(globalContext);
    const searchPost=()=>{

        value.search(searchTitle);
    }
    const updateSearchTitle=(e)=>{
        if(e.target.value===null){
            value.usearch(false)
        }else{
            value.usearch(true);
            
            setsearchTitle(e.target.value);
        }
        
    }
    const clearSearch = async ()=>{
        await setsearchTitle(null);
        value.usearch(false)
    } 
    return(
        <div className={classes.searchBar}>
                <div className={classes.searchBox}>
                <button
                 type="button"
                 value={searchTitle}
                 onClick={searchPost}><i class="fas fa-search"></i></button>   
                <input
                onChange={updateSearchTitle}
                style={{height:'50px'}}
                className={classes.searchInput}
                 type='text'
                 name='search'
                 placeholder='Search Post by title...'
                 />
                 <button
                  type="button"
                  onClick={clearSearch}><i class="far fa-times-circle"></i></button>
                 </div>
                 <hr/>
            </div>
    )
} 

export default SearchBox;
