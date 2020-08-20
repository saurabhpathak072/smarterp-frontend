import React,{useContext} from 'react';
import GlobalContext from '../../GlobalContext/GlobalContext'
import Posts from '../../components/Posts/Posts'
import SearchBox from '../../components/SearchBox/SearchBox'

function Main() {
    return (
        <div>
            <GlobalContext>
                <SearchBox/>
                <Posts/>
            </GlobalContext>
            
        </div>
    )
}

export default Main
