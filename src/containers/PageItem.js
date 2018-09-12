import React from 'react';
import { connect } from 'react-redux';
import {
   getHomePageId,
   get404PageId,
   getPageURL,
   getTotalPagesCount,
} from '../selectors';
import {
   requestSetHomePage,
   requestSet404Page,
   requestUnset404Page,
   requestPublishPage,
   requestDeletePage,
   requestDeleteHomePage,
   requestDuplicatePage,
   requestMovePageToFolder,
} from '../actions';
import Button from '../components/Button';

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
      return (
         <div className={ this.getCSSClasses() } onClick={ this.onItemClick }>
            <span className="sk-mp-pageslist-item-title">{ this.props.name }</span>
            <Button
               className="sk-mp-pageslist-item-btn btn-delete"
               title="Allows you to delete this page from your site"
               onClick={ this.deletePage }
            />
            <Button
               className="sk-mp-pageslist-item-btn btn-edit"
               title="Allows you to update/change your settings for this page"
            />
            <Button
               className="sk-mp-pageslist-item-btn btn-home"
               title="Allows you to make this the first page your visitors see when they first go to your site"
               onClick={ this.setHomePage }
            />
            <Button
               className="sk-mp-pageslist-item-btn btn-duplicate sk-ui-advanced-option"
               title="Duplicate the page"
               onClick={ this.duplicatePage }
            />
            <Button
               className="sk-mp-pageslist-item-btn btn-move sk-ui-advanced-option"
               title="Move page to a folder"
               onClick={ this.movePageToFolder }
            />
            <Button
               className="sk-mp-pageslist-item-btn btn-404 sk-ui-advanced-option"
               title="Set as 404 page"
               onClick={ this.toggle404Page }
            />
            <Button
               className="sk-mp-pageslist-item-btn btn-publish sk-ui-advanced-option"
               title="Publish the page"
               onClick={ this.publishPage }
            />
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
      this.props.dispatch( requestSetHomePage( this.props.id ) );
   }

   toggle404Page() {
      const method = this.props.is_404_page ? requestUnset404Page : requestSet404Page;
      this.props.dispatch( method( this.props.id ) );
   }

   publishPage() {
      this.props.dispatch( requestPublishPage( this.props.id ) );
   }

   deletePage() {
      if ( this.props.total_pages_count === 1 ) {
         alert( 'You cannot delete the only page in your site.' );
         return;
      }

      // Run `object.page.get` with { references : 1 } parameter
      setTimeout( () => {
         // TODO: If there are references display popup

         // Make check if we're trying to delete the current homepage
         if ( this.props.is_homepage ) {
            // Display popup for selection of a new home page
            const next_homepage_id = window.prompt( 'Type the next homepage ID:' );
            if ( ! next_homepage_id ) {
               return;
            }
            this.props.dispatch( requestDeleteHomePage( parseInt( next_homepage_id, 10 ) ) );
            return;
         }

         this.props.dispatch( requestDeletePage( this.props.id ) );
      }, 100 );
   }

   duplicatePage() {
      // TODO: In real case - do not pass `name` and `url` props.
      this.props.dispatch( requestDuplicatePage( this.props.id, this.props.name, this.props.url ) )
   }

   movePageToFolder() {
      var folder_id = window.prompt( 'Fill the folder ID where you want to move the page (0 for the root folder):', 0 );

      if ( ! folder_id ) {
         return;
      }

      this.props.dispatch( requestMovePageToFolder( this.props.id, parseInt( folder_id, 10 ) ) )
   }
};

const mapStateToProps = ( state, own_props ) => ({
   full_url    : getPageURL( state, own_props.id ),
   is_homepage : getHomePageId( state ) === own_props.id,
   is_404_page : get404PageId( state ) === own_props.id,
   is_visible  : true, // TODO: Use the current filter
   total_pages_count : getTotalPagesCount( state.pages.order ),
});

export default connect( mapStateToProps )( PageItem );
