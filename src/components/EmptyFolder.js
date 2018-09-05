import React from 'react';

const EmptyFolder = ( props ) => {
   const onAddPageClick = ( event ) => {
      event.preventDefault();
      // TODO: Clicking on the link must open the [Add Page] panel
      // preselecting the choosed folder in the dropdown there.
   };

   return (
      <div className="sk-mp-folder-empty">
         <p>No pages</p>
         <p>Drag a page here or <a href="" onClick={ onAddPageClick }>add a new page</a></p>
      </div>
   );
};

export default EmptyFolder;