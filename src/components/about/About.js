//@flow
import * as React from 'react'
import axios from 'axios'

import './About.scoped.scss'

type Props = {

}

export default function About(props: Props) : React.Node {
    
    const { useState, useEffect } = React;
    const [ feedPosts, setFeedPosts] = useState()

    useEffect(() => {
        axios.get('api/feedPosts')
        .then((res) => setFeedPosts(res.data.feedPosts))
        .catch((err) => console.error(err))
    },[])

    const feedPostsRenderer = () => {
        if(feedPosts){
            return(
                feedPosts.map(post => <span key={post.id}>{post.body}</span>)
            )
        }else{
            return <span>Getting posts</span>
        }
    }
    
    return (
        <div className="content" id="about-wrapper">
            <section className="content-panel" id="community-feed">
                <h1 className="graf sign" data-testid="feed-header">Community Feed</h1>
                {feedPostsRenderer()}
            </section>
        </div>
    )
}