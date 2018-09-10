import React from 'react';
import FolderItemHeader from './FolderItemHeader';
import DroppableArea from '../containers/DroppableArea';
import PagesList from '../containers/PagesList';

class FolderItem extends React.Component {
   constructor( props ) {
      super( props )

      this.togglePagesList = this.togglePagesList.bind( this );

      this.state = {
         is_expanded : true,
      };
   }

   render() {
      // console.log( '>>> folder item', this.props );

      return (
         <div className={ this.getCSSClasses() }>
            { !! this.props.name && <FolderItemHeader { ...this.props } onClick={ this.togglePagesList }/> }
            <DroppableArea id={ this.props.id }>
               <PagesList folder_id={ this.props.id }/>
            </DroppableArea>
         </div>
      );
   }

   getCSSClasses() {
      return [
         'sk-mp-folders-item',
         ( this.state.is_expanded ? 'expanded' : 'collapsed' ),
      ].join( ' ' );
   }

   togglePagesList( event ) {
      this.setState( ( prev_state ) => ({
         is_expanded : ! prev_state.is_expanded
      }));
   }
};

export default FolderItem;
