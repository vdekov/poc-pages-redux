import React from 'react';
import { connect } from 'react-redux';
import {
   getHomePageId,
   get404PageId,
   getPageURL,
} from '../selectors';
import {
   setHomePage,
   set404Page,
   unset404Page,
   publishPage,
   requestDeletePage,
   requestDuplicatePage,
   requestMovePageToFolder,
} from '../actions';
import Button from '../components/Button';
import DeletePageButton from './DeletePageButton';

class PageItem extends React.Component {
   constructor( props ) {
      super( props );

      this.onItemClick      = this.onItemClick.bind( this );
      this.setHomePage      = this.setHomePage.bind( this );
      this.toggle404Page    = this.toggle404Page.bind( this );
      this.publishPage      = this.publishPage.bind( this );
      this.deletePage       = this.deletePage.bind( this );
      this.duplicatePage    = this.duplicatePage.bind( this );
      this.movePageToFolder = this.movePageToFolder.bind( this );
   }

   render() {
      // console.log( '>>> page item', this.props );

      return (
         <div className={ this.getCSSClasses() } onClick={ this.onItemClick }>
            <span className="sk-mp-pageslist-item-title">{ this.props.name } (id: { this.props.id})</span>
            <DeletePageButton className="sk-mp-pageslist-item-btn btn-delete" is_homepage={ this.props.is_homepage } onClick={ this.deletePage }/>
            <Button className="sk-mp-pageslist-item-btn btn-edit"/>
            <Button className="sk-mp-pageslist-item-btn btn-home" onClick={ this.setHomePage }/>
            <Button className="sk-mp-pageslist-item-btn btn-duplicate sk-ui-advanced-option" onClick={ this.duplicatePage }/>
            <Button className="sk-mp-pageslist-item-btn btn-move sk-ui-advanced-option" onClick={ this.movePageToFolder }/>
            <Button className="sk-mp-pageslist-item-btn btn-404 sk-ui-advanced-option" onClick={ this.toggle404Page }/>
            <Button className="sk-mp-pageslist-item-btn btn-publish sk-ui-advanced-option" onClick={ this.publishPage }/>
         </div>
      );
   }

   getCSSClasses() {
      return [
         'sk-mp-pageslist-item',
         ( this.props.is_published ? ' published' : '' ),
         ( this.props.is_homepage  ? ' homepage'  : '' ),
         ( this.props.is_404_page  ? ' page404'   : '' ),
      ].join( '' );
   }

   onItemClick() {
      // TODO: Redirect to the page with SK.Actions
      // redirect( SK.Util.buildLink( this.props.full_url ) );
      console.log( 'Go to:', this.props.full_url );
   }

   setHomePage() {
      if ( this.props.is_homepage ) {
         return;
      }
      this.props.setHomePage();
   }

   toggle404Page() {
      this.props.is_404_page ? this.props.unset404Page() : this.props.set404Page();
   }

   publishPage() {
      this.props.publishPage();
   }

   deletePage() {
      this.props.deletePage();
   }

   duplicatePage() {
      this.props.duplicatePage();
   }

   movePageToFolder() {
      var folder_id = window.prompt( 'Fill the folder ID where you want to move the page (0 for the root folder):', 0 );

      if ( ! folder_id ) {
         return;
      }

      this.props.movePageToFolder( parseInt( folder_id, 10 ) );
   }
};

const mapStateToProps = ( state, own_props ) => ({
   full_url    : getPageURL( state, own_props.id ),
   is_homepage : getHomePageId( state ) === own_props.id,
   is_404_page : get404PageId( state ) === own_props.id,
   is_visible  : true, // TODO: Use the current filter
});

const mapDispatchToProps = ( dispatch, own_props ) => ({
   setHomePage : () => {
      dispatch( setHomePage( own_props.id ) )
   },
   set404Page : () => {
      dispatch( set404Page( own_props.id ) )
   },
   unset404Page : () => {
      dispatch( unset404Page( own_props.id ) )
   },
   publishPage : () => {
      dispatch( publishPage( own_props.id ) )
   },
   deletePage : () => {
      dispatch( requestDeletePage( own_props.id ) )
   },
   duplicatePage : () => {
      // TODO: In real case - do not pass `name` and `url` props.
      dispatch( requestDuplicatePage( own_props.id, own_props.name, own_props.url ) )
   },
   movePageToFolder : ( folder_id ) => {
      dispatch( requestMovePageToFolder( own_props.id, folder_id ) )
   },
});

export default connect( mapStateToProps, mapDispatchToProps )( PageItem );
