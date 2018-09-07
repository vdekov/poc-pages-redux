import {
   SET_404_PAGE,
   UNSET_404_PAGE,
   DELETE_PAGE,
} from '../constants';

const page_404_id = ( state = null, action ) => {
   switch ( action.type ) {
   case SET_404_PAGE:
      return action.id;
   case UNSET_404_PAGE:
   case DELETE_PAGE:
      if ( state === action.id ) {
         return null;
      }
      return state;
   default:
      return state;
   }
}

export default page_404_id;
