import { combineReducers } from 'redux';
import {
   RECEIVE_REDIRECTS,
   CREATE_REDIRECT,
   UPDATE_REDIRECT,
   DELETE_REDIRECT,
} from '../constants';

const order = ( state = [], action ) => {
   switch ( action.type ) {
   case RECEIVE_REDIRECTS:
      return [ ...state, ...action.payload.order ];
   case CREATE_REDIRECT:
      return [ ...state, action.payload.id ];
   case DELETE_REDIRECT:
      return state.filter( item => item !== action.id );
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
   case DELETE_REDIRECT:
      const next_state = { ...state };
      delete next_state[ action.id ];
      return next_state;
   case CREATE_REDIRECT:
   case UPDATE_REDIRECT:
      return {
         ...state,
         [ action.payload.id ] : action.payload,
      };
   default:
      return state;   
   }
};

export default combineReducers({
   order,
   items,
});
