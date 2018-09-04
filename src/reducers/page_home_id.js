import { SET_HOME_PAGE } from '../constants';

const page_home_id = ( state = null, action ) => {
   switch ( action.type ) {
   case SET_HOME_PAGE:
      return action.id;
   default:
      return state;
   }
}

export default page_home_id;