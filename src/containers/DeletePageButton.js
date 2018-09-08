import { connect } from 'react-redux';
import Button from '../components/Button';
import { getTotalPagesCount } from '../selectors';
import { requestDeleteHomePage } from '../actions';

const mapStateToProps = ( state, own_props ) => ({
   total_pages_count : getTotalPagesCount( state.pages.order ),
});

const mapDispatchToProps = ( dispatch, own_props ) => ({
   deleteHomePage : ( next_homepage_id ) => {
      dispatch( requestDeleteHomePage( next_homepage_id ) );
   },
});

const mergeProps = ( state_props, dispatch_props, own_props ) => {
   const { is_homepage, ...rest } = own_props;

   return {
      ...rest,
      onClick : () => {
         if ( state_props.total_pages_count === 1 ) {
            alert( 'You cannot delete the only page in your site.' );
            return;
         }

         // Run `object.page.get` with { references : 1 } parameter
         setTimeout( () => {
            // TODO: If there are references display popup

            // Make check if we're trying to delete the current homepage
            if ( is_homepage ) {
               // Display popup for selection of a new home page
               const next_homepage_id = window.prompt( 'Type the next homepage ID:' );
               if ( ! next_homepage_id ) {
                  return;
               }
               dispatch_props.deleteHomePage( parseInt( next_homepage_id, 10 ) );
               return;
            }

            own_props.onClick();
         }, 100 );
      }
   }
};

export default connect( mapStateToProps, mapDispatchToProps, mergeProps )( Button );
