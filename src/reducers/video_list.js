import {FETCH_VIDEOS}  from '../actions';

export default function(state = {}, action) {
    switch (action.type){
        case FETCH_VIDEOS:
            return Object.assign({}, state, {
                videos: action.payload
            })
        default:
            return state;
    }
}