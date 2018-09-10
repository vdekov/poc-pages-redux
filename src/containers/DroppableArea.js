import React from 'react';
import { connect } from 'react-redux';
import { requestMovePageToFolder } from '../actions';

class DroppableArea extends React.Component {
   constructor( props ) {
      super( props );

      this.onDragOver  = this.onDragOver.bind( this );
      this.onDragLeave = this.onDragLeave.bind( this );
      this.onDrop      = this.onDrop.bind( this );

      this.state = {
         backgroundColor : 'transparent',
      };
   }

   render() {
      return (
         <div
            onDragOver={ this.onDragOver }
            onDragLeave={ this.onDragLeave }
            onDrop={ this.onDrop }
            style={{ 'backgroundColor' : this.state.backgroundColor }}
         >
            { this.props.children }
         </div>
      );
   }

   onDragOver( event ) {
      event.preventDefault();

      this.setState({
         backgroundColor : '#e5f1f8',
      });
   }

   onDragLeave( event ) {
      event.preventDefault();
      this.resetBackgroundColor();
   }

   onDrop( event ) {
      event.preventDefault();

      const { item_id, parent_id } = JSON.parse( event.dataTransfer.getData( 'application/json' ) );

      // Do not execute the onDrop callback if the next
      // parent element is the same as the current one.
      if ( this.props.id !== parent_id ) {
         ( this.props.onDrop || function () {} )( item_id );
      }

      this.resetBackgroundColor();
   }

   resetBackgroundColor() {
      this.setState({
         backgroundColor : 'transparent',
      });
   }
}

const mapStateToProps = ( state, own_props ) => ({});

const mapDispatchToProps = ( dispatch, own_props ) => ({
   onDrop : ( item_id ) => {
      dispatch( requestMovePageToFolder( item_id, own_props.id ) );
   },
});

export default connect( mapStateToProps, mapDispatchToProps )( DroppableArea );
