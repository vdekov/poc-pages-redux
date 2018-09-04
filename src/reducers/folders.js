import { combineReducers } from 'redux';

const ids = ( state = [], action ) => {
   return state;
}

const items = ( state = {}, action ) => {
   return state;
}

const folders = combineReducers({
   ids,
   items
});

export default folders;