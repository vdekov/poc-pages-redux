import * as constants from '../constants';
import api from '../api';
import * as utils from '../utils';

// Initial action creators
export const requestFolders = () => {
   return ( dispatch ) => {
      return api.folders.request().then( data => {
         return dispatch( receiveFolders( utils.getExtractedFoldersData( data ) ) );
      });
   };
};

const receiveFolders = ( payload ) => ({
   type : constants.RECEIVE_FOLDERS,
   payload,
});

export const requestPages = () => {
   return ( dispatch ) => {
      return api.pages.requestNodeIds().then( page_node_ids => {
         // Split the received page node_ids into 2 batches
         // get the page data for the first 20 of them
         // and then for the rest.
         const node_ids      = [ ...page_node_ids ];
         const rest_node_ids = node_ids.splice( constants.PAGES_BATCH_SIZE );

         api.pages.request( node_ids ).then( data => {
            dispatch( receivePages( utils.getExtractedPagesData( data ) ) );
            rest_node_ids.length && api.pages.request( rest_node_ids ).then( data => {
               dispatch( receivePages( utils.getExtractedPagesData( data ) ) );
            });
         });
      });
   };
};

const receivePages = ( payload ) => ({
   type : constants.RECEIVE_PAGES,
   payload,
});

export const requestRedirects = () => {
   return dispatch => {
      return api.redirects.request().then( data => {
         return dispatch( receiveRedirects( utils.getExtractedRedirectsData( data ) ) );
      });
   };
};

const receiveRedirects = ( payload ) => ({
   type : constants.RECEIVE_REDIRECTS,
   payload,
});

// Folder action creators

// CREATE FOLDER
export const requestCreateFolder = ( name, url ) => {
   return ( dispatch ) => {
      url = url || utils.slugify( name );
      return api.folders.create( name, url ).then( ( id ) => {
         return dispatch( createFolder(
            id || utils.getRandomArbitrary( 10, 100 ), // Use the ID from the API call
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
      url = url || utils.slugify( name );
      api.folders.update( id, name, url );
      return dispatch( updateFolder(
         id,
         name,
         `/${url}/`      // TODO: Handle properly the URL from the API call
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
      api.folders.remove( id );
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
      api.pages.setHomePage( id );
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
      api.pages.set404Page( id );
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
      api.pages.unset404Page( id );
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
      api.pages.publishPage( id );
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
      api.pages.remove( id );
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
      return api.pages.duplicate( id ).then( () => {
         // TODO: In the real case `duplicated_page_id`, `name` and `url`
         // will be returned from the API call.
         const duplicated_page = {
            id   : utils.getRandomArbitrary( 150, 300 ),
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
      api.pages.moveToFolder( page_id, folder_id );
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
      api.pages.setHomePage( next_homepage_id ).then( () => {
         api.pages.remove( homepage_id );
      });
   };
};

// Redirect action creators

// CREATE REDIRECT
export const requestCreateRedirect = ( name, path, link ) => {
   return dispatch => {
      path = path || utils.slugify( name );
      link = link || null;

      return api.redirects.create().then( id => {
         return dispatch( createRedirect(
            id || utils.getRandomArbitrary( 10, 1000 ), // Use the ID from the API call
            name,
            path,
            link
         ));
      });
   };
};

const createRedirect = ( id, name, path, link ) => ({
   type    : constants.CREATE_REDIRECT,
   payload : {
      id,
      name,
      path,
      link,
   },
});

// DELETE REDIRECT
export const requestDeleteRedirect = ( id ) => {
   return ( dispatch ) => {
      api.redirects.remove( id );
      return dispatch( deleteRedirect( id ) );
   }
};

const deleteRedirect = ( id ) => ({
   type : constants.DELETE_REDIRECT,
   id,
});

// UPDATE REDIRECT
export const requestUpdateRedirect = ( id, name, path, link ) => {
   return dispatch => {
      // TODO: Don't use this approach in the real case.
      path = utils.slugify( name );
      api.redirects.update( id, name, path, link );
      return dispatch( updateRedirect( id, name, path, link ) );
   };
};

const updateRedirect = ( id, name, path, link ) => ({
   type    : constants.UPDATE_REDIRECT,
   payload : {
      id,
      name,
      path,
      link,
   },
});
