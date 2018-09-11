const API_TIMEOUT = 400;

export const createFolderAPI = ( name, url ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.folder.add` API call
      setTimeout( () => {
         console.warn( '>>> create folder API was successfully executed' );
         // Pass the folder id to the `success` callback
         success();
      }, API_TIMEOUT );
   });
};

export const updateFolderAPI = ( id, name, url ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.folder.update` API call
      setTimeout( () => {
         console.warn( '>>> update folder API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const deleteFolderAPI = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.folder.remove` API call
      setTimeout( () => {
         console.warn( '>>> delete folder API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const set404PageAPI = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Execute `site.set_404_page` API call
      setTimeout( () => {
         console.warn( '>>> set 404 page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const unset404PageAPI = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Execute `site.unset_404_page` API call
      setTimeout( () => {
         console.warn( '>>> unset 404 page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const publishPageAPI = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Execute `object.page.publish` API call
      setTimeout( () => {
         console.warn( '>>> publish page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const setHomePageAPI = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Execute `site.set_home_page` API call
      setTimeout( () => {
         console.warn( '>>> set home page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const deletePageAPI = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `object.page.remove` API call
      setTimeout( () => {
         console.warn( '>>> delete page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const duplicatePageAPI = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `object.page.duplicate` API call
      setTimeout( () => {
         console.warn( '>>> duplicate page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const movePageToFolderAPI = ( page_id, folder_id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `object.page.move_to_folder` API call
      setTimeout( () => {
         console.warn( '>>> move page to folder API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};
