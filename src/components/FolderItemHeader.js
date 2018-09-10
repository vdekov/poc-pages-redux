import React from 'react';
import Button from '../components/Button';

const FolderItemHeader = ( props ) => {
   return (
      <div className="sk-mp-folders-item-header" onClick={ props.onClick }>
         <span className="sk-mp-folders-item-arrow"></span>
         <span className="sk-mp-folders-item-label">{ props.name } (id: { props.id })</span>
         <span className="sk-mp-folders-item-buttons">
            <Button className="sk-mp-folders-item-btn btn-delete" onClick={ () => { console.log( '>>> delete folder' ); } }/>
            <Button className="sk-mp-folders-item-btn btn-edit" onClick={ () => { console.log( '>>> edit folder' ); } }/>
         </span>
      </div>
   );
};

export default FolderItemHeader;
