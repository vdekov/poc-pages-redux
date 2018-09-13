import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { requestDeleteRedirect, requestUpdateRedirect } from '../actions';

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
      const redirect_name = window.prompt( 'Type the new redirect name:', this.props.name );

      if ( ! redirect_name || ! redirect_name.trim() || redirect_name === this.props.name ) {
         return;
      }

      // TODO: Change the 3rd parameter to the new redirect path.
      this.props.dispatch( requestUpdateRedirect( this.props.id, redirect_name, redirect_name, this.props.link ) );
   }
}

export default connect()( RedirectItem );
