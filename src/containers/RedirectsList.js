import React from 'react';
import { connect } from 'react-redux';
import { getAllRedirectsOrdered } from '../selectors'
import RedirectItem from './RedirectItem';

const RedirectsList = ( props ) => {
   return (
      <div className="sk-mp-redirects-list">
         { props.data.map( item => <RedirectItem key={ item.id } { ...item }/>) }
      </div>
      // TODO: Add redirect button
   );
};

const mapStateToProps = ( state, own_props ) => ({
   data : getAllRedirectsOrdered( state.redirects ),
});

export default connect( mapStateToProps )( RedirectsList );
