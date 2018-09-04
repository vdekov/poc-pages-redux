import { combineReducers } from 'redux';

const order = ( state = [ 0 ], action ) => {
   return state;
}

const default_items_state = {
   0 : {
      id       : 0,
      name     : '',
      url      : '',
   }
};

const items = ( state = default_items_state, action ) => {
   return state;
}

const folders = combineReducers({
   order,
   items
});

export default folders;