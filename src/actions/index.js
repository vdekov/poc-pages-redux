import * as constants from '../constants';
import {
   setHomePageAPI,
   deletePageAPI,
} from '../api';

// TODO: Temporary functions - using just to generate a page ID.
const getRandomArbitrary = ( min, max ) => {
   return Math.round( Math.random() * ( max - min ) + min );
};

const slugify = ( text ) => {
   return text.toString().toLowerCase()
         .replace( /\s+/g, '-' )           // Replace spaces with -
         .replace( /[^\w-]+/g, '' )       // Remove all non-word chars
         .replace( /--+/g, '-' )         // Replace multiple - with single -
         .replace( /^-+/, '' )             // Trim - from start of text
         .replace( /-+$/, '' );            // Trim - from end of text
};

// Folder action creators
export const requestCreateFolder = ( name ) => {
   return ( dispatch ) => {
      // Run `site.folder.add` API call
      return setTimeout( () => {
         dispatch( createFolder(
            getRandomArbitrary( 10, 100 ),
            name,
            slugify( name ),
         ));
      }, 100 );
   };
};

const createFolder = ( id, name, url ) => ({
   type    : constants.CREATE_FOLDER,
   payload : {
      id,
      name,
      url,
   }
});

export const requestUpdateFolder = ( id, name, url ) => {
   return ( dispatch ) => {
      // Run `site.folder.update` API call
   }
};

export const requestDeleteFolder = ( id ) => {
   return ( dispatch ) => {
      // Run `site.folder.remove` API call
      return dispatch( deleteFolder( id ) );
   }
};

const deleteFolder = ( id ) => ({
   type : constants.DELETE_FOLDER,
   id,
});

export const changeFilter = ( filter ) => ({
   type : constants.CHANGE_FILTER,
   filter,
});

// Page action creators
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

export const set404Page = ( id ) => ({
   type : constants.SET_404_PAGE,
   id
});

export const unset404Page = ( id ) => ({
   type : constants.UNSET_404_PAGE,
   id
});

export const publishPage = ( id ) => ({
   type : constants.PUBLISH_PAGE,
   id
});

export const requestDeletePage = ( id ) => {
   return ( dispatch ) => {
      deletePageAPI( id );
      return dispatch( deletePage( id ) );
   };
};

const deletePage = ( id ) => ({
   type : constants.DELETE_PAGE,
   id
});

export const requestDuplicatePage = ( id , name, url) => {
   return ( dispatch ) => {
      // Run `object.page.duplicate` API call
      // TODO: In the real case `duplicated_page_id`, `name` and `url`
      // will be returned from the API call.
      const duplicated_page = {
         id   : getRandomArbitrary( 150, 300 ),
         url  : `${url}_1`,
         name : `Copy of ${name}`,
      };
      return dispatch( duplicatePage( id, duplicated_page ) );
   };
};

const duplicatePage = ( id, duplicated_page ) => ({
   type : constants.DUPLICATE_PAGE,
   id,
   duplicated_page,
});

export const requestMovePageToFolder = ( page_id, folder_id ) => {
   return ( dispatch ) => {
      // Run `object.page.move_to_folder` API call
      return dispatch( movePageToFolder( page_id, folder_id ) );
   };
};

const movePageToFolder = ( page_id, folder_id ) => ({
   type : constants.MOVE_PAGE_TO_FOLDER,
   page_id,
   folder_id,
});

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
