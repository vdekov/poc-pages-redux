import React from 'react';
import AddFolderButton from '../containers/AddFolderButton';
import SearchBox from '../containers/SearchBox';
import FoldersList from '../containers/FoldersList';

const App = () => (
   <div id="app">
      <AddFolderButton className="sk-mp-addfolder"/>
      <SearchBox id="sk-mp-searchbox" placeholder="Search..."/>
      <FoldersList/>
   </div>
);

export default App;
