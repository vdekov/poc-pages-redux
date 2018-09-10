import { combineReducers } from 'redux';
import {
   CREATE_FOLDER,
   DELETE_FOLDER,
} from '../constants';

const order = ( state = [ 0 ], action ) => {
   switch ( action.type ) {
   case CREATE_FOLDER:
      return [ ...state, action.payload.id ];
   case DELETE_FOLDER:
      return state.filter( item => item !== action.id );
   default:
      return state;
   }
}

const default_items_state = {
   0 : {
      id       : 0,
      name     : '',
      url      : '',
   }
};

const items = ( state = default_items_state, action ) => {
   switch ( action.type ) {
   case CREATE_FOLDER:
      return {
         ...state,
         [ action.payload.id ] : action.payload,
      }
   case DELETE_FOLDER:
      const next_state = { ...state };
      delete next_state[ action.id ];
      return next_state;
   default:
      return state;
   }
}

const folders = combineReducers({
   order,
   items
});

export default folders;
