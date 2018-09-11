import React from 'react';
import Header from './Header';
import SearchBox from '../containers/SearchBox';
import FoldersList from '../containers/FoldersList';

const App = () => (
   <div id="app">
      <Header/>
      <SearchBox placeholder="Search..."/>
      <FoldersList/>
   </div>
);

export default App;
