import {
   DELETE_PAGE,
   MOVE_PAGE_TO_FOLDER,
} from '../constants';

const page_folders = ( state = {}, action ) => {
   switch ( action.type ) {
   case DELETE_PAGE:
      const next_state = { ...state };
      delete next_state[ action.id ];
      return next_state;
   case MOVE_PAGE_TO_FOLDER:
      return {
         ...state,
         [ action.page_id ] : action.folder_id,
      };
   default:
      return state;
   }
}

export default page_folders;