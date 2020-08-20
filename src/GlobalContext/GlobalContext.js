import React,{useState,useEffect,createContext,useReducer} from 'react';
import Axios from 'axios';
import {reducers} from '../Reducers/Reducer';
import * as actionType from '../actionType/actionType';
export const initialState={
    posts:[],
    search:[],
    issearch:false
}
export const globalContext=createContext(initialState);
function GlobalContext(props) {
    const [search, setsearch] = useState(false)
    const [state, dispatch] = useReducer(reducers, initialState)
    useEffect(() => {
        Axios.get('https://post-71f65.firebaseio.com/post/post/post.json')
        .then(res=>{dispatch({type:actionType.INITIALIZE_POSTS,payload:res.data})})
        .catch(err=>console.log(err))
    }, [])
    const postData =async (post)=>{        
         const upost=[...state.posts];
         const upost1=upost.concat({id:post.id,
            title:post.title,
            post:post.post});
         await Axios.put('https://post-71f65.firebaseio.com//post/post.json',{
            post:upost1
            
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        dispatch({type:actionType.POST_DATA,payload:post})
        
    }
    const searchPost=(title)=>{
        dispatch({type:actionType.SEARCH_POST,title:title})
    }
    const updatesearch =(a)=>{
        
        dispatch({type:actionType.IS_SEARCH,payload:a})
    }

    return (
        <div>
            <globalContext.Provider value={{issearch:state.issearch,usearch:updatesearch,post:state.posts,searchpost:state.search,add:postData,search:searchPost}}>
                {props.children}
            </globalContext.Provider>
            
        </div>
    )
}


export default GlobalContext
