import { combineReducers } from 'redux';
import {
   RECEIVE_REDIRECTS,
   // CREATE_REDIRECT,
   // UPDATE_REDIRECT,
   // DELETE_REDIRECT,
} from '../constants';

const order = ( state = [], action ) => {
   switch ( action.type ) {
   case RECEIVE_REDIRECTS:
      return [ ...state, ...action.payload.order ];
   default:
      return state;
   }
};

const items = ( state = {}, action ) => {
   switch ( action.type ) {
   case RECEIVE_REDIRECTS:
      return {
         ...state,
         ...action.payload.items,
      };
   default:
      return state;   
   }
};

export default combineReducers({
   order,
   items,
});
