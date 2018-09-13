import { connect } from 'react-redux';
import Button from '../components/Button';
import { requestCreateFolder } from '../actions';

const mapStateToProps = ( state, own_props ) => ({
   className : 'sk-mp-add-folder-btn',
});

const mapDispatchToProps = ( dispatch, own_props ) => ({
   onClick : () => {
      const folder_name = window.prompt( 'Write the new folder name:' );
      if ( ! folder_name || ! folder_name.trim() ) {
         return;
      }

      dispatch( requestCreateFolder( folder_name.trim() ) );
   },
});

export default connect( mapStateToProps, mapDispatchToProps )( Button );
