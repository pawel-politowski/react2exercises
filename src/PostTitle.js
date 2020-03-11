import React from 'react';

function PostTitle (props){
    return <div className="postTitle"><h3>{props.postTitle}</h3><br/>{props.post}<br/></div>
        
}

export default PostTitle;