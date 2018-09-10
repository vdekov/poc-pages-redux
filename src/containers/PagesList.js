import React from 'react';
import { connect } from 'react-redux';
import { getPagesByFolderId } from '../selectors';
import DraggableItem from './DraggableItem';
import PageItem from './PageItem';
import EmptyFolder from '../components/EmptyFolder';

const PagesList = ( props ) => {
   // console.log( '>>> pages list', props.folder_id, props.data );

   // If the selected folder have not pages - display an empty folder area.
   if ( ! props.data.length ) {
      return <EmptyFolder/>;
   }

   return (
      <div className="sk-mp-pageslist">
         { props.data.map( item =>
            <DraggableItem key={ item.id } item_id={ item.id } parent_id={ props.folder_id }>
               <PageItem { ...item }/>
            </DraggableItem>
         )}
      </div>
   );
};

const mapStateToProps = ( state, own_props ) => ({
   data : getPagesByFolderId( state, own_props.folder_id ),
});

export default connect( mapStateToProps )( PagesList );
