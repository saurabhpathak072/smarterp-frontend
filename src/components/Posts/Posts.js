import React,{useContext,useState} from 'react'
import NewPost from './NewPost/NewPost';
import classes from './Posts.module.css';
import PublishedPost from '../Posts/PublishedPost/PublishedPost';

function Posts() {
    const [showNewPost, setshowNewPost] = useState(false);

    const newPostHandler =()=>{
        setshowNewPost(!showNewPost);
    }
    return (
        <div className={classes.posts}>
            <div className={classes.postparts}>
                <h2 onClick={newPostHandler}>ADD NEW POST</h2>
                {showNewPost?<NewPost newPostHandler={newPostHandler}/>:<p>Add new Post</p>}
            </div>
            <div className={classes.postparts}>
                <h2>PUBLISHED POSTS</h2>
                <PublishedPost/>
            </div>
        </div>
    )
}

export default Posts
