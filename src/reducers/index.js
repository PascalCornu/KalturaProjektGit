import { combineReducers } from 'redux';
import videoReducer from './video_list';

const rootReducer = combineReducers({
    videos: videoReducer
});

export default rootReducer;
