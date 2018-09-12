import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import {
   requestDeleteFolder,
   requestUpdateFolder,
} from '../actions';
import { isFolderEmpty } from '../selectors';

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
            <span className={ this.getLabelCSSClasses() }>{ this.props.name }</span>
            <span className="sk-mp-folders-item-buttons">
               <Button
                  className="sk-mp-folders-item-btn btn-delete"
                  title="Delete"
                  onClick={ this.deleteFolder }
               />
               <Button
                  className="sk-mp-folders-item-btn btn-edit"
                  title="Edit"
                  onClick={ this.editFolder }
               />
            </span>
         </div>
      );
   }

   getLabelCSSClasses() {
      return [
         'sk-mp-folders-item-label',
         ( this.props.is_empty ? ' empty' : '' ),
      ].join( '' );
   }

   deleteFolder() {
      const should_delete = window.confirm(
         `Are you agree to delete the folder ${ this.props.name }?\nAll pages in the folder will be moved to the root folder.`
      );
      should_delete && this.props.dispatch( requestDeleteFolder( this.props.id ) );
   }

   editFolder() {
      const folder_name = window.prompt( 'Type the new folder name:', this.props.name );

      if ( ! folder_name || ! folder_name.trim() || folder_name === this.props.name ) {
         return;
      }

      this.props.dispatch( requestUpdateFolder( this.props.id, folder_name ) );
   }
};

const mapStateToProps = ( state, own_props ) => ({
   is_empty : isFolderEmpty( state.page_folders, own_props.id ),
});

export default connect( mapStateToProps )( FolderItemHeader );
