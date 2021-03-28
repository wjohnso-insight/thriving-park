//TODO: [√] define `feedSlice`
//TODO: [√] define `FeedPost` type
//TODO: [√] scaffold out slice with dummy data
//TODO: [] wire slice to `<Feed>` component
//TODO: [] define async thunk to retrieve `feedPosts` from server
//TODO: [] define `feedPostUpdated` action (dependant on `Session` slice)
//TODO: [] define `feedPostDeleted` action (dependant on `Session` slice )
//TODO: [] define `selectFeed` global selector
//TODO: [] defined `selectUserPosts` global selector (dependant on `Session` slice)
//TODO: [] write middleware to dispatch updates to server
//@flow 

import { FeedPost } from './FeedPost'

type State = Array<FeedPost>;

let initialState : FeedPost[] = [
    {
        postId: 1,
        userId: 1,
        body: "This is post number 1"
    },
    {
        postId: 2,
        userId: 2, 
        body: "This is post number 2"
    }
]

function nextFeedPostId(feedPosts: FeedPost[]) : number{
    const maxId = feedPosts.reduce((maxId, feedPost) => Math.max(feedPost.postId, maxId), -1);
    return maxId + 1;
}

export default function feedReducer(state : State = initialState, action: Object): State{
    switch(action.type){
        case 'feed/feedPostAdded':{

            const { userId, body } = action.payload;

            return[
                ...state,
                {
                    postId: nextFeedPostId(state),
                    userId,
                    body,
                }
            ]
        }
        default: 
        return state
    }
}

