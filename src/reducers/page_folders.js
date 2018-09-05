import { DELETE_PAGE } from '../constants';

const page_folders = ( state = {}, action ) => {
   switch ( action.type ) {
   case DELETE_PAGE:
      const next_state = { ...state };
      delete next_state[ action.id ];
      return next_state;
   default:
      return state;
   }
}

export default page_folders;