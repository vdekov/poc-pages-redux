import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { requestDeleteFolder } from '../actions';

class FolderItemHeader extends React.Component {
   constructor( props ) {
      super( props );

      this.deleteFolder = this.deleteFolder.bind( this );
      this.editFolder   = this.editFolder.bind( this );
   }

   render() {
      return (
         <div className="sk-mp-folders-item-header" onClick={ this.props.onClick }>
            <span className="sk-mp-folders-item-arrow"></span>
            <span className="sk-mp-folders-item-label">{ this.props.name } (id: { this.props.id })</span>
            <span className="sk-mp-folders-item-buttons">
               <Button className="sk-mp-folders-item-btn btn-delete" onClick={ this.deleteFolder }/>
               <Button className="sk-mp-folders-item-btn btn-edit" onClick={ this.editFolder }/>
            </span>
         </div>
      );
   }

   deleteFolder() {
      const should_delete = window.confirm(
         `Are you agree to delete the folder ${ this.props.name }?\nAll pages in the folder will be moved to the root folder.`
      );
      should_delete && this.props.dispatch( requestDeleteFolder( this.props.id ) );
   }

   editFolder() {}
};

export default connect()( FolderItemHeader );
