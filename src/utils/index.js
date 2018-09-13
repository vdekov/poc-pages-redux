// Temporary functions - using just to generate a page ID.
export const getRandomArbitrary = ( min, max ) => {
   return '' + Math.round( Math.random() * ( max - min ) + min );
};

export const slugify = ( text ) => {
   return text.toString().toLowerCase()
         .replace( /\s+/g, '-' )           // Replace spaces with -
         .replace( /[^\w-]+/g, '' )        // Remove all non-word chars
         .replace( /--+/g, '-' )           // Replace multiple - with single -
         .replace( /^-+/, '' )             // Trim - from start of text
         .replace( /-+$/, '' );            // Trim - from end of text
};

export const getExtractedFoldersData = ( data ) => {
   const payload = {
      order : [],
      items : {},
   };

   data.forEach( folder => {
      payload.order.push( folder.folder_id );
      payload.items[ folder.folder_id ] = {
         id   : folder.folder_id,
         name : folder.properties.name,
         url  : folder.properties.path,
      };
   });

   return payload;
};

export const getExtractedPagesData = ( data ) => {
   const payload = {
      pages : {
         order : [],
         items : {},
      },
      page_folders : {},
   };

   data.forEach( page => {
      payload.pages.order.push( page.node_id );
      payload.pages.items[ page.node_id ] = {
         id : page.node_id,
         name : page.properties.Title,
         url : page.properties.URL,
         is_published : !! page.is_published,
      };
      payload.page_folders[ page.node_id ] = page.folder_id || '0';
      if ( page.is_404_page ) {
         payload.page_404_id = page.node_id;
      }
      if ( page.is_home_page ) {
         payload.page_home_id = page.node_id;
      }
   });
   return payload;
};
