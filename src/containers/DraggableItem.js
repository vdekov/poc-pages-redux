import React from 'react';

class DraggableItem extends React.Component {
   constructor( props ) {
      super( props );

      this.onDragStart = this.onDragStart.bind( this );
      this.onDragEnd   = this.onDragEnd.bind( this );
   }

   render() {
      return (
         <div
            draggable="true"
            onDragStart={ this.onDragStart }
            onDragEnd={ this.onDragEnd }
         >
            { this.props.children }
         </div>
      );
   }

   onDragStart( event ) {
      const drag_data = {
         item_id   : this.props.item_id,
         parent_id : this.props.parent_id,
      };
      event.dataTransfer.setData( 'application/json', JSON.stringify( drag_data ) );
   }

   onDragEnd( event ) {
      // event.dataTransfer.clearData();
   }
}

export default DraggableItem;
