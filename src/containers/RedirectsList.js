import React from 'react';
import { connect } from 'react-redux';
import { getAllRedirectsOrdered } from '../selectors'
import RedirectItem from './RedirectItem';
import AddRedirectButton from './AddRedirectButton';

const RedirectsList = ( props ) => {
   return (
      <div className="sk-mp-redirects-list">
         { props.data.map( item => <RedirectItem key={ item.id } { ...item }/>) }
         <AddRedirectButton>
            <p className="btn-caption">Add Redirect</p>
         </AddRedirectButton>
      </div>
   );
};

const mapStateToProps = ( state, own_props ) => ({
   data : getAllRedirectsOrdered( state.redirects ),
});

export default connect( mapStateToProps )( RedirectsList );
