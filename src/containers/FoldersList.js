import React from 'react';
import { connect } from 'react-redux';
import { getAllFolders } from '../selectors'
import FolderItem from '../components/FolderItem';

const FoldersList = ( props ) => {
   return (
      <div className="sk-mp-folderslist">
         { props.data.map( item => <FolderItem key={ item.id } { ...item }/>) }
      </div>
   );
};

const mapStateToProps = ( state, own_props ) => ({
   data : getAllFolders( state.folders ),
});

export default connect( mapStateToProps )( FoldersList );