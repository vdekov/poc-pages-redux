import React from 'react';
import { connect } from 'react-redux';
import { getPagesByFolderId } from '../selectors';
import PageItem from './PageItem';

const PagesList = ( props ) => {
   // console.log( props.folder_id, props.data );

   return (
      <div className="sk-mp-pageslist">
         { props.data.map( item => <PageItem key={ item.id } { ...item }/> ) }
      </div>
   );
};

const mapStateToProps = ( state, own_props ) => ({
   data : getPagesByFolderId( state, own_props.folder_id ),
});

export default connect( mapStateToProps )( PagesList );