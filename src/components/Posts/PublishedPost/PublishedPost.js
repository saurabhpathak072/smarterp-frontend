import React,{useContext} from 'react'
import {globalContext} from '../../../GlobalContext/GlobalContext';

function PublishedPost() {
    const value=useContext(globalContext);
    let publishposts;
    if(!value.post){
        publishposts=(<p>Publish Post...</p>)
    }
    else{
        console.log("[publish] search",value.issearch);
        if(value.issearch){
            
            publishposts=value.searchpost.map(publishpost=>{
                return(
                    <div key={publishpost.id}>
                        <div>
                        <label><h3>Title</h3></label>
                            <div>{publishpost.title}</div>
                        </div>
                        <div>
                        <label><h3>Post</h3></label>
                            <div>{publishpost.post}</div>
                        </div>
                        <hr/>
                    </div>
                )
            })

        }
        else{
            console.log("[publish] post",value.issearch)
        publishposts=value.post.map(publishpost=>{
            return(
                <div key={publishpost.id}>
                    <div>
                    <label><h3>Title</h3></label>
                        <div>{publishpost.title}</div>
                    </div>
                    <div>
                    <label><h3>Post</h3></label>
                        <div>{publishpost.post}</div>
                    </div>
                    <hr/>
                </div>
            )
        })
    }
    }
    return (
        <div>
            {publishposts}
        </div>
    )
}

export default PublishedPost
