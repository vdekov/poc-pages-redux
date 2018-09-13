import { SET_HOME_PAGE, RECEIVE_PAGES } from '../constants';

const page_home_id = ( state = null, action ) => {
   switch ( action.type ) {
   case RECEIVE_PAGES:
      return action.payload.page_home_id || state;
   case SET_HOME_PAGE:
      return action.id;
   default:
      return state;
   }
}

export default page_home_id;
