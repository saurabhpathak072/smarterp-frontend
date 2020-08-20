import React from 'react';
import ReactMarkdown from 'react-markdown';

function PostMarkdown(props) {
    return (
        <div>
            <h4>Markdown Editor Post Will Appear Here</h4>
            <ReactMarkdown
            source={props.mkpost}
            escapeHtml={false}
            
            />
        </div>
    )
}

export default PostMarkdown
