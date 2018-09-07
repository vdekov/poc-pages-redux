import * as constants from '../constants';

// Folder action creators
export const requestCreateFolder = ( name, url ) => {
   return ( dispatch ) => {
      // Run `site.folder.add` API call
      return setTimeout( () => {
         dispatch( successCreateFolder(
            Math.round( Math.random() * 100 ),
            name,
            url
         ));
      }, 1000 );
   };
};

const successCreateFolder = ( id, name, url ) => ({
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

export const changeFilter = ( filter ) => ({
   type : constants.CHANGE_FILTER,
   filter,
});

// Page action creators
// TODO: Execute `site.set_home_page` API call
export const setHomePage = ( id ) => ({
   type : constants.SET_HOME_PAGE,
   id
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
      // Run `object.page.remove` API call
      return dispatch( successDeletePage( id ) );
   };
};

const successDeletePage = ( id ) => ({
   type : constants.DELETE_PAGE,
   id
});

// TODO: Temporary function - using just to generate a page ID.
const getRandomArbitrary = ( min, max ) => {
   return Math.round( Math.random() * ( max - min ) + min );
}

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
      return dispatch( successDuplicatePage( id, duplicated_page ) );
   };
};

const successDuplicatePage = ( id, duplicated_page ) => ({
   type : constants.DUPLICATE_PAGE,
   id,
   duplicated_page,
});

export const requestMovePageToFolder = ( page_id, folder_id ) => {
   return ( dispatch ) => {
      // Run `object.page.move_to_folder` API call
      return dispatch( successMovePageToFolder( page_id, folder_id ) );
   };
};

const successMovePageToFolder = ( page_id, folder_id ) => ({
   type : constants.MOVE_PAGE_TO_FOLDER,
   page_id,
   folder_id,
});
