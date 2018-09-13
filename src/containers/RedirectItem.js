import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { requestDeleteRedirect } from '../actions';

class RedirectItem extends React.Component {
   constructor( props ) {
      super( props );

      this.deleteRedirect = this.deleteRedirect.bind( this );
      this.editRedirect   = this.editRedirect.bind( this );
   }

   render() {
      return (
         <div className="sk-mp-redirects-item">
            <span className="sk-mp-redirects-item-title">{ this.props.name }</span>
            <Button
               className="sk-mp-redirects-item-btn btn-delete"
               title="Delete"
               onClick={ this.deleteRedirect }
            />
            <Button
               className="sk-mp-redirects-item-btn btn-edit"
               title="Edit"
               onClick={ this.editRedirect }
            />
         </div>
      );
   }

   deleteRedirect() {
      const should_delete = window.confirm( `Are you agree to delete ${ this.props.name } redirect?` );
      should_delete && this.props.dispatch( requestDeleteRedirect( this.props.id ) );
   }

   editRedirect() {
      console.log( '>>> edit redirect' );
   }
}

export default connect()( RedirectItem );
