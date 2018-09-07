import React from 'react';

const FolderItemHeader = ( props ) => {
   // TODO: Add buttons here
   return (
      <div className="sk-mp-folderitem-header">{ props.name } (id: { props.id })</div>
   );
};

export default FolderItemHeader;