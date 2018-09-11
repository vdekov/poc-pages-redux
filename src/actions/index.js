import * as constants from '../constants';
import {
   createFolderAPI,
   updateFolderAPI,
   deleteFolderAPI,
   set404PageAPI,
   unset404PageAPI,
   publishPageAPI,
   setHomePageAPI,
   deletePageAPI,
   duplicatePageAPI,
   movePageToFolderAPI,
} from '../api';

// TODO: Temporary functions - using just to generate a page ID.
const getRandomArbitrary = ( min, max ) => {
   return Math.round( Math.random() * ( max - min ) + min );
};

const slugify = ( text ) => {
   return text.toString().toLowerCase()
         .replace( /\s+/g, '-' )           // Replace spaces with -
         .replace( /[^\w-]+/g, '' )        // Remove all non-word chars
         .replace( /--+/g, '-' )           // Replace multiple - with single -
         .replace( /^-+/, '' )             // Trim - from start of text
         .replace( /-+$/, '' );            // Trim - from end of text
};

// Folder action creators

// CREATE FOLDER
export const requestCreateFolder = ( name, url ) => {
   return ( dispatch ) => {
      url = url || slugify( name );
      return createFolderAPI( name, url ).then( ( id ) => {
         return dispatch( createFolder(
            getRandomArbitrary( 10, 100 ), // Use the ID from the API call
            name,
            url
         ));
      });
   };
};

const createFolder = ( id, name, url ) => ({
   type    : constants.CREATE_FOLDER,
   payload : {
      id,
      name,
      url,
   },
});

// UPDATE FOLDER
export const requestUpdateFolder = ( id, name, url ) => {
   return ( dispatch ) => {
      url = url || slugify( name );
      updateFolderAPI( name, url );
      return dispatch( updateFolder(
         id,
         name,
         url
      ));
   }
};

const updateFolder = ( id, name, url ) => ({
   type    : constants.UPDATE_FOLDER,
   payload : {
      id,
      name,
      url,
   },
});

// DELETE FOLDER
export const requestDeleteFolder = ( id ) => {
   return ( dispatch ) => {
      deleteFolderAPI( id );
      return dispatch( deleteFolder( id ) );
   }
};

const deleteFolder = ( id ) => ({
   type : constants.DELETE_FOLDER,
   id,
});

// CHANGE FILTER
export const changeFilter = ( filter ) => ({
   type : constants.CHANGE_FILTER,
   filter,
});

// Page action creators

// SET HOME PAGE
export const requestSetHomePage = id => {
   return dispatch => {
      setHomePageAPI( id );
      return dispatch( setHomePage( id ) );
   };
};

const setHomePage = id => ({
   type : constants.SET_HOME_PAGE,
   id,
});

// SET 404 PAGE
export const requestSet404Page = ( id ) => {
   return ( dispatch ) => {
      set404PageAPI( id );
      return dispatch( set404Page( id ) );
   };
};

const set404Page = ( id ) => ({
   type : constants.SET_404_PAGE,
   id,
});

// UNSET 404 PAGE
export const requestUnset404Page = ( id ) => {
   return ( dispatch ) => {
      unset404PageAPI( id );
      return dispatch( unset404Page( id ) );
   };
};

const unset404Page = ( id ) => ({
   type : constants.UNSET_404_PAGE,
   id,
});

// PUBLISH PAGE
export const requestPublishPage = ( id ) => {
   return ( dispatch ) => {
      publishPageAPI( id );
      return dispatch( publishPage( id ) );
   };
};

const publishPage = ( id ) => ({
   type : constants.PUBLISH_PAGE,
   id,
});

// DELETE PAGE
export const requestDeletePage = ( id ) => {
   return ( dispatch ) => {
      deletePageAPI( id );
      return dispatch( deletePage( id ) );
   };
};

const deletePage = ( id ) => ({
   type : constants.DELETE_PAGE,
   id,
});

// DUPLICATE PAGE
export const requestDuplicatePage = ( id, name, url ) => {
   return ( dispatch ) => {
      return duplicatePageAPI( id ).then( () => {
         // TODO: In the real case `duplicated_page_id`, `name` and `url`
         // will be returned from the API call.
         const duplicated_page = {
            id   : getRandomArbitrary( 150, 300 ),
            url  : `${url}_1`,
            name : `Copy of ${name}`,
         };
         return dispatch( duplicatePage( id, duplicated_page ) );
      });
   };
};

const duplicatePage = ( id, payload ) => ({
   type : constants.DUPLICATE_PAGE,
   id,
   payload,
});

// MOVE PAGE TO FOLDER
export const requestMovePageToFolder = ( page_id, folder_id ) => {
   return ( dispatch ) => {
      movePageToFolderAPI( page_id, folder_id );
      return dispatch( movePageToFolder( page_id, folder_id ) );
   };
};

const movePageToFolder = ( page_id, folder_id ) => ({
   type : constants.MOVE_PAGE_TO_FOLDER,
   page_id,
   folder_id,
});

// DELETE HOME PAGE
export const requestDeleteHomePage = ( next_homepage_id ) => {
   return ( dispatch, getState ) => {
      const homepage_id = getState().page_home_id;

      // Dispatch set/delete home page action creators
      dispatch( setHomePage( next_homepage_id ) );
      dispatch( deletePage( homepage_id ) );

      // Run both APIs synchronously
      setHomePageAPI( next_homepage_id ).then( () => {
         deletePageAPI( homepage_id );
      });
   };
};
