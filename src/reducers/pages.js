import { combineReducers } from 'redux';
import * as constants from '../constants';

const order = ( state = [], action ) => {
   return state;
}

const items = ( state = {}, action ) => {
   switch ( action.type ) {
   case constants.PUBLISH_PAGE:
      return state.map( page => {
         return page.id === action.id
            ? { ...page, is_published : true }
            : page;
      });
   default:
      return state;
   }
}

const pages = combineReducers({
   order,
   items
});

export default pages;