import { SET_404_PAGE, UNSET_404_PAGE } from '../constants';

const page_404_id = ( state = null, action ) => {
   switch ( action.type ) {
   case SET_404_PAGE:
      return action.id;
   case UNSET_404_PAGE:
      return null;
   default:
      return state;
   }
}

export default page_404_id;