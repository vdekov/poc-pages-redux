export default {
   folders : {
      order : [ 0, 1, 2 ],
      items : {
         0 : {
            id       : 0,
            name     : '',
            url      : '',
         },
         1 : {
            id       : 1,
            name     : 'Secondary Folder',
            url      : 'secondary-folder',
         },
         2 : {
            id       : 2,
            name     : 'Main',
            url      : 'main',
         },
      },
   },
   page_folders : {
      123 : 1,
      124 : 1,
      125 : 0,
   },
   pages : {
      order : [ 123, 124, 125 ],
      items : {
         123 : {
            id           : 123,
            name         : 'Home',
            url          : 'home',
            is_published : true,
         },
         124 : {
            id           : 124,
            name         : 'About Us',
            url          : 'about-us',
            is_published : false,
         },
         125 : {
            id           : 125,
            name         : 'Contacts',
            url          : 'contacts',
            is_published : false,
         },
      },
   },
   page_home_id : 125,
   page_404_id  : 124,
   filter       : '',
};
