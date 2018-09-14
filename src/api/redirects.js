import getRedirects from './get_redirects'
import { API_TIMEOUT } from '../constants';

export const request = () => {
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

export const create = ( name, path, link ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.redirect.add` API call
      setTimeout( () => {
         console.warn( '>>> create redirect API was successfully executed' );
         // Pass the redirect id to the `success` callback
         success();
      }, API_TIMEOUT );
   });
};


export const remove = id => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.redirect.remove` API call
      setTimeout( () => {
         console.warn( '>>> remove redirect API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};

export const update = ( id, name, path, link ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `site.redirect.update` API call
      setTimeout( () => {
         console.warn( '>>> update redirect API was successfully executed' );
         success();
      }, API_TIMEOUT );
   });
};
