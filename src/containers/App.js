import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SearchBox from './SearchBox';
import FoldersList from './FoldersList';
import RedirectsList from './RedirectsList';
import { requestFolders, requestPages, requestRedirects } from '../actions';

class App extends React.Component {
   render() {
      return (
         <div id="app">
            <Header/>
            <SearchBox placeholder="Search..."/>
            <FoldersList/>
            {/* TODO: Wrap into collapsible section */}
            <RedirectsList/>
         </div>
      );
   }

   componentDidMount() {
      this.props.dispatch( requestFolders() );
      this.props.dispatch( requestPages() );
      this.props.dispatch( requestRedirects() );
   }
};

export default connect()( App );
