//@flow
import * as React from 'react'
import axios from 'axios'

type Props = {

}

export default function About(props: Props) : React.Node {
    
    const [ feedPosts, setFeedPosts] = React.useState()

    React.useEffect(() => {
        axios.get('api/feedPosts')
        .then((res) => setFeedPosts(res.data.feedPosts))
        .catch((err) => console.log(err))
    },[])

    return (
        <div>
            {(feedPosts ? <span>{feedPosts[0].body}</span> : <span>Getting posts</span>)}
        </div>
    )
}