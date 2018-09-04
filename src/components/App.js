import React from 'react';
import SearchBox from '../containers/SearchBox';
import FoldersList from '../containers/FoldersList';

const App = () => (
   <div>
      <SearchBox id="sk-mp-searchbox" placeholder="Search..."/>
      <FoldersList/>
   </div>
);

export default App;