import getPageNodeIds from './get_page_node_ids';
import getPages from './get_pages';
import { API_TIMEOUT } from '../constants';


export const requestNodeIds = () => {
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

export const request = ( node_ids ) => {
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

export const set404Page = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Execute `site.set_404_page` API call
      setTimeout( () => {
         console.warn( '>>> set 404 page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const unset404Page = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Execute `site.unset_404_page` API call
      setTimeout( () => {
         console.warn( '>>> unset 404 page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const publishPage = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Execute `object.page.publish` API call
      setTimeout( () => {
         console.warn( '>>> publish page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const setHomePage = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Execute `site.set_home_page` API call
      setTimeout( () => {
         console.warn( '>>> set home page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const remove = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `object.page.remove` API call
      setTimeout( () => {
         console.warn( '>>> remove page API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const duplicate = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `object.page.duplicate` API call
      setTimeout( () => {
         console.warn( '>>> duplicate page API was successfully executed' );
         // Pass the duplicated page data to the `success` callback
         success();
      }, API_TIMEOUT );
   });
};

export const moveToFolder = ( page_id, folder_id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `object.page.move_to_folder` API call
      setTimeout( () => {
         console.warn( '>>> move page to folder API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};
