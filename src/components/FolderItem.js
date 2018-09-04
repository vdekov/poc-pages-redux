import React from 'react';
import FolderItemHeader from './FolderItemHeader';
import PagesList from '../containers/PagesList';

const FolderItem = ( props ) => {
   // console.log( '>>> folder item', props );

   return (
      <div className="sk-mp-folderitem">
         { !! props.name && <FolderItemHeader { ...props }/> }
         <PagesList folder_id={ props.id }/>
      </div>
   );
};

export default FolderItem;