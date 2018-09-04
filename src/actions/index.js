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

export const successCreateFolder = ( id, name, url ) => ({
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