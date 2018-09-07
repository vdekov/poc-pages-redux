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
   requestMovePageToFolder,
} from '../actions';
import Button from '../components/Button';

const PageItem = ( props ) => {
   // console.log( '>>> page item', props );

   const class_name = [
      'sk-mp-pageslist-item',
      ( props.is_published ? ' published' : '' ),
      ( props.is_homepage  ? ' homepage'  : '' ),
      ( props.is_404_page  ? ' page404'   : '' ),
   ].join( '' );

   // TODO: Redirect to the page with SK.Actions
   // const onItemClick   = () => { redirect( SK.Util.buildLink( props.full_url ) )  };
   const onItemClick   = () => { console.log( 'Go to:', props.full_url ) };
   const setHomePage   = props.is_homepage ? function () {} : props.setHomePage;
   const toggle404Page = props.is_404_page ? props.unset404Page : props.set404Page;
   const publishPage   = props.publishPage;
   const deletePage    = props.deletePage;
   const movePageToFolder = () => {
      var folder_id = window.prompt( 'Fill the folder ID where you want to move the page (0 for the root folder):', 0 );

      if ( ! folder_id ) {
         return;
      }

      props.movePageToFolder( parseInt( folder_id, 10 ) );
   };

   return (
      <div className={ class_name } onClick={ onItemClick }>
         <span className="sk-mp-pageslist-item-title">{ props.name } (id: { props.id})</span>
         <Button className="sk-mp-pageslist-item-btn btn-delete" onClick={ deletePage }/>
         <Button className="sk-mp-pageslist-item-btn btn-edit"/>
         <Button className="sk-mp-pageslist-item-btn btn-home" onClick={ setHomePage }/>
         <Button className="sk-mp-pageslist-item-btn btn-duplicate sk-ui-advanced-option"/>
         <Button className="sk-mp-pageslist-item-btn btn-move sk-ui-advanced-option" onClick={ movePageToFolder }/>
         <Button className="sk-mp-pageslist-item-btn btn-404 sk-ui-advanced-option" onClick={ toggle404Page }/>
         <Button className="sk-mp-pageslist-item-btn btn-publish sk-ui-advanced-option" onClick={ publishPage }/>
      </div>
   );
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
      dispatch( requestDeletePage ( own_props.id ) )
   },
   movePageToFolder : ( folder_id ) => {
      dispatch( requestMovePageToFolder( own_props.id, folder_id ) )
   },
});

export default connect( mapStateToProps, mapDispatchToProps )( PageItem );