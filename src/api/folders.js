import getFolders from './get_folders';
import { API_TIMEOUT } from '../constants';

export const request = () => {
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

export const create = ( name, url ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.folder.add` API call
      setTimeout( () => {
         console.warn( '>>> create folder API was successfully executed' );
         // Pass the folder id to the `success` callback
         success();
      }, API_TIMEOUT );
   });
};

export const update = ( id, name, url ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.folder.update` API call
      setTimeout( () => {
         console.warn( '>>> update folder API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const remove = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.folder.remove` API call
      setTimeout( () => {
         console.warn( '>>> remove folder API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};
