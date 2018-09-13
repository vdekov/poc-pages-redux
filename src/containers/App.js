import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SearchBox from './SearchBox';
import FoldersList from './FoldersList';
import { requestFolders, requestPages } from '../actions';

class App extends React.Component {
   render() {
      return (
         <div id="app">
            <Header/>
            <SearchBox placeholder="Search..."/>
            <FoldersList/>
         </div>
      );
   }

   componentDidMount() {
      this.props.dispatch( requestFolders() );
      this.props.dispatch( requestPages() );
   }
};

export default connect()( App );
