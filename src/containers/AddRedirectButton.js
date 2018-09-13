import { connect } from 'react-redux';
import Button from '../components/Button';
import { requestCreateRedirect } from '../actions';

const mapStateToProps = ( state, own_props ) => ({
   className : 'sk-mp-add-redirect-btn btn-root btn-secondary btn-icon btn-icon-add btn-root-down',
});

const mapDispatchToProps = ( dispatch, own_props ) => ({
   onClick : () => {
      const redirect_name = window.prompt( 'Write the new redirect name:' );
      if ( ! redirect_name || ! redirect_name.trim() ) {
         return;
      }

      dispatch( requestCreateRedirect( redirect_name.trim() ) );
   },
});

export default connect( mapStateToProps, mapDispatchToProps )( Button );
