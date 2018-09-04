import { combineReducers } from 'redux';
import folders from './folders';
import pages from './pages';
import page_folders from './page_folders';
import page_home_id from './page_home_id';
import page_404_id from './page_404_id';
import filter from './filter';

const root = combineReducers({
   folders,
   pages,
   page_folders,
   page_home_id,
   page_404_id,
   filter,
});

export default root;