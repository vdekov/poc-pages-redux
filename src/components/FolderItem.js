import React from 'react';
import FolderItemHeader from './FolderItemHeader';
import DroppableArea from '../containers/DroppableArea';
import PagesList from '../containers/PagesList';

const FolderItem = ( props ) => {
   // console.log( '>>> folder item', props );

   return (
      <div className="sk-mp-folderitem">
         { !! props.name && <FolderItemHeader { ...props }/> }
         <DroppableArea id={ props.id }>
            <PagesList folder_id={ props.id }/>
         </DroppableArea>
      </div>
   );
};

export default FolderItem;
