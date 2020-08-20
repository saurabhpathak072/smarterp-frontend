import React,{useContext} from 'react'
import {globalContext} from '../../../GlobalContext/GlobalContext';
import Loader from '../../Loader/Loader'
import classes from './PublishedPost.module.css';

function PublishedPost() {
    const value=useContext(globalContext);
    console.log(value);
    let publishposts=<Loader/>;
    if(!value.post){
        publishposts=<Loader/>
    }
    else{
        if(value.issearch){
            
            publishposts=value.searchpost.map(publishpost=>{
                return(
                    <div  key={publishpost.id}>
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
        <div className={classes.published}>
            {publishposts}
        </div>
    )
}

export default PublishedPost
