import getFolders from './get_folders';
import getPageNodeIds from './get_page_node_ids';
import getPages from './get_pages';
import getRedirects from './get_redirects'

const API_TIMEOUT = 500;

export const requestFoldersAPI = () => {
   return new Promise( ( success, failure ) => {
      // Run `site.folder.get_all` API call
      setTimeout( () => {
         console.warn( '>>> request folders API was successfully executed' );
         const { data } = getFolders();
         // Pass the folders data to the `success` callback
         success( data );
      }, API_TIMEOUT );
   });
};

export const requestPagesNodeIdsAPI = () => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `object.site.get_pages` API call
      setTimeout( () => {
         console.warn( '>>> request page node_ids API was successfully executed' );
         const { data } = getPageNodeIds();
         const page_node_ids = data.pages.links.map( page => page.node_id );
         // Pass the page node_ids array to the `success` callback
         success( page_node_ids );
      }, API_TIMEOUT );
   });
}

export const requestPagesAPI = ( node_ids ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `object.page.get_multiple` API call passing the node_ids as a parameter
      setTimeout( () => {
         console.warn( '>>> request pages API was successfully executed' );
         const { data } = getPages( node_ids );
         // Pass the page node_ids array to the `success` callback
         success( data );
      }, API_TIMEOUT );
   });
};

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
         // Pass the duplicated page data to the `success` callback
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

export const requestRedirectsAPI = () => {
   return new Promise( ( success, failure ) => {
      // Run `site.redirect.get_all` API call
      setTimeout( () => {
         console.warn( '>>> request redirects API was successfully executed' );
         const { data } = getRedirects();
         // Pass the folders data to the `success` callback
         success( data );
      }, API_TIMEOUT );
   });
};

export const deleteRedirectAPI = id => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.redirect.remove` API call
      setTimeout( () => {
         console.warn( '>>> delete redirect API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const updateRedirectAPI = ( id, name, path, link ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.redirect.update` API call
      setTimeout( () => {
         console.warn( '>>> update redirect API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};
