import React,{useState,useContext} from 'react'
import {globalContext} from '../../../GlobalContext/GlobalContext';
import classes from './NewPost.module.css';
import PostMarkdown from './Postmarkdown/PostMarkdown';

function NewPost(props) {
    const [title, settitle] = useState('');
    const [post, setpost] = useState('');
    const[isalert,setisalert]=useState(false);
    const value=useContext(globalContext);
    const updatepostHandler=(e)=>{
        setpost(e.target.value);
    }
    const updateTitleHandler =(e)=>{
        settitle(e.target.value);
    }
    const postDataHandler=async (e)=>{
        e.preventDefault();
        if(!title){
            setisalert(true);
            alert("please add title");
        }
        else if(post===''||post===null){
            
            setisalert(true);
            alert("please add post");
        }
        else{
       const id=Math.random();
          value.add({id:id,title,post});
        }
        
    }
    return (
        <div className={classes.form}>

            <form>
                <div>
                    <div className={classes.label}>
                        <label >Title</label>
                    </div>
                <input
                 type="text"
                 className={classes.inputarea}
                 placeholder="title"
                 required
                 onChange={updateTitleHandler}
                 value={title}/>
                </div>
                {isalert && title ?<p>Pleae enter fileld</p>:null}
                <div>
                <div className={classes.label}>
                        <label>Post</label>
                    </div>
                    <textarea
                    className={classes.inputarea}
                    required
                     onChange={updatepostHandler}
                      value={post}
                    ></textarea>
                    {isalert && post ?<p>Pleae enter fileld</p>:null}
                </div>
                <button className={classes.button} onClick={postDataHandler}>Post</button>
                <button className={classes.button} onClick={props.newPostHandler}>close</button>
            </form>
            
            <div className={classes.markdown}>
            <PostMarkdown mkpost={post}/>
            </div>
        </div>
    )
}

export default NewPost
