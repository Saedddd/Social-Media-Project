import React from 'react'
import {Post as IPost} from './main'

interface Props{
    post: IPost;
}

function Post(props: Props) {
    const {post} = props
  return (
    <div>
        <div className="title">
            <h1>{post.title}</h1>
        </div>
        <div className="desc">
            <p>{post.description}</p>
        </div>
        <div className="footer">
            <p>@{post.username}</p>
        </div>
    </div>
  )
}

export default Post