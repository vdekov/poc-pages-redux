import {
   RECEIVE_PAGES,
   DELETE_FOLDER,
   DELETE_PAGE,
   DUPLICATE_PAGE,
   MOVE_PAGE_TO_FOLDER,
} from '../constants';

const page_folders = ( state = {}, action ) => {
   let next_state;

   switch ( action.type ) {
   case RECEIVE_PAGES:
      return {
         ...state,
         ...action.payload.page_folders,
      };
   case DELETE_FOLDER:
      next_state = { ...state };

      // Move all nested pages from the deleted to the root folder.
      for ( let page_id in next_state ) {
         if ( next_state.hasOwnProperty( page_id )
            && next_state[ page_id ] === action.id
         ) {
            next_state[ page_id ] = 0;
         }
      }
      return next_state;
   case DELETE_PAGE:
      next_state = { ...state };
      delete next_state[ action.id ];
      return next_state;
   case DUPLICATE_PAGE:
      return {
         ...state,
         [ action.payload.id ] : state[ action.id ],
      }
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
