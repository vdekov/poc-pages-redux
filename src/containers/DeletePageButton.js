import { connect } from 'react-redux';
import Button from '../components/Button';
import { getTotalPagesCount } from '../selectors';
import { setHomePage } from '../actions';

const mapStateToProps = ( state, own_props ) => ({
   total_pages_count : getTotalPagesCount( state.pages.order ),
});

const mapDispatchToProps = ( dispatch, own_props ) => ({
   setHomePage : ( id ) => {
      dispatch( setHomePage( id ) );
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
               const new_homepage_id = prompt( 'Type the new homepage ID:' );
               if ( ! new_homepage_id ) {
                  return;
               }
               dispatch_props.setHomePage( parseInt( new_homepage_id, 10 ) );
            }

            own_props.onClick();
         }, 100 );
      }
   }
};

export default connect( mapStateToProps, mapDispatchToProps, mergeProps )( Button );
