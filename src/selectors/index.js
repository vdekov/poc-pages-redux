const sort_fn = ( a, b ) => {
   return a.name.toLowerCase() > b.name.toLowerCase()
         ? 1 
         : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0;
}

export const getCurrentFilter = ( state ) => {
   return state.filter;
};

const getAllFolders = ( state ) => {
   return state.order.map( folder_id => state.items[ folder_id ] );
};

export const getAllFoldersOrdered = ( state ) => {
   return getAllFolders( state ).sort( sort_fn );
};

const getVisiblePagesByFolderId = ( state, folder_id ) => {
   const page_ids   = [];
   const page_items = [];

   // Collect all page_ids which belongs to the current folder_id.
   for ( let page_id in state.page_folders ) {
      if (
         state.page_folders.hasOwnProperty( page_id )
         && state.page_folders[ page_id ] === folder_id
      ) {
         page_ids.push( Number( page_id ) );
      }
   }

   state.pages.order.forEach( page_id => {
      if (
         page_ids.includes( page_id )
         && ~ state.pages.items[ page_id ].name.toLowerCase().indexOf( state.filter.toLowerCase() ) 
      ) {
         page_items.push( state.pages.items[ page_id ] );
      }
   });

   return page_items;
};

export const getVisiblePagesByFolderIdOrdered = ( state, folder_id ) => {
   return getVisiblePagesByFolderId( state, folder_id ).sort( sort_fn );
};

export const getHomePageId = ( state ) => {
   return state.page_home_id;
};

export const get404PageId = ( state ) => {
   return state.page_404_id;
};

export const getPageURL = ( state, page_id ) => {
   const folder_id = state.page_folders[ page_id ];
   return `${state.folders.items[ folder_id ].url}/${state.pages.items[ page_id ].url}`;
};

export const getTotalPagesCount = ( state ) => {
   return state.length;
};
