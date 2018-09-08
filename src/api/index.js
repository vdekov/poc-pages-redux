export const setHomePageAPI = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Execute `site.set_home_page` API call
      setTimeout( () => {
         console.log( '>>> set home page API call executed' );
         success();
      }, 250 );
   });
};

export const deletePageAPI = ( id ) => {
   return new Promise( ( success, failure ) => {
      // TODO: Run `object.page.remove` API call
      setTimeout( () => {
         console.log( '>>> delete page API call executed' );
         success();
      }, 250 );
   });
};
