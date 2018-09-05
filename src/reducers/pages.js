import { combineReducers } from 'redux';
import * as constants from '../constants';

const order = ( state = [], action ) => {
   switch ( action.type ) {
   case constants.DELETE_PAGE:
      return state.filter( page_id => page_id !== action.id );
   default:
      return state;
   }
}

const items = ( state = {}, action ) => {
   switch ( action.type ) {
   case constants.PUBLISH_PAGE:
      return {
         ...state,
         [ action.id ] : { ...state[ action.id ], is_published : true }
      };
   case constants.DELETE_PAGE:
      const next_state = { ...state };
      delete next_state[ action.id ];
      return next_state;
   default:
      return state;
   }
}

const pages = combineReducers({
   order,
   items
});

export default pages;