//TODO: [√] define `sessionSlice`
//TODO: [√] scaffold out slice with dummy data
//TODO: [√] write slice to `index.js` (should dispatch on application init)
//TODO: [√] define async thunk to retrieve `activeUser : userID` from server
//TODO: [] define `selectActiveUser` global selector 
import axios from 'axios'

type State = {
    activeUserId: number | undefined,
}

let initialState : State = {
    activeUserId: undefined,
}

export default function sessionReducer(state: State = initialState, action: Object): State{
    switch(action.type){
        case 'session/activeUserInitialized':{
            return {
                ...state,
                activeUserId: action.payload
            }
        }
        default: 
            return state
    }
}

export async function getActiveUser(dispatch, getState){
    const response = await axios.get('/api/activeUser')
    dispatch({type: 'session/activeUserInitialized', payload: response.data})
}