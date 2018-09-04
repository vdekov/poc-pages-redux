import React from 'react';
import { connect } from 'react-redux';
import { getHomepageId, get404pageId } from '../selectors';
import Button from '../components/Button';

const PageItem = ( props ) => {
   console.log( '>>> page item', props );
   const class_name = [
      'sk-mp-pageslist-item',
      ( props.is_published ? ' published' : '' ),
      ( props.is_homepage  ? ' homepage'  : '' ),
      ( props.is_404_page  ? ' page404'   : '' ),
   ].join( '' );

   return (
      <div className={ class_name }>
         <span className="sk-mp-pageslist-item-title">{ props.name }</span>
         <Button className="sk-mp-pageslist-item-btn btn-delete"/>
         <Button className="sk-mp-pageslist-item-btn btn-edit"/>
         <Button className="sk-mp-pageslist-item-btn btn-home"/>
         <Button className="sk-mp-pageslist-item-btn btn-duplicate sk-ui-advanced-option"/>
         <Button className="sk-mp-pageslist-item-btn btn-move sk-ui-advanced-option"/>
         <Button className="sk-mp-pageslist-item-btn btn-404 sk-ui-advanced-option"/>
         <Button className="sk-mp-pageslist-item-btn btn-publish sk-ui-advanced-option"/>
      </div>
   );
};

const mapStateToProps = ( state, own_props ) => ({
   is_homepage : getHomepageId( state ) === own_props.id,
   is_404_page : get404pageId( state ) === own_props.id,
   is_visible  : true, // TODO: Use the current filter
});

export default connect( mapStateToProps )( PageItem );