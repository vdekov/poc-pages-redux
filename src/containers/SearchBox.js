import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import { getCurrentFilter } from '../selectors';

class SearchBox extends React.Component {
   constructor( props ) {
      super( props );
      this.handleChange = this.handleChange.bind( this );
   }

   render() {
      return (
         <div id={ this.props.id }>
            <input
               type="text"
               placeholder={ this.props.placeholder }
               value={ this.props.value }
               onChange={ this.handleChange }
            />
         </div>
      );
   }

   handleChange( e ) {
      this.props.onChange( e.target.value )
   }
};

const mapStateToProps = ( state, own_props ) => ({
   value : getCurrentFilter( state ),
});

const mapDispatchToProps = ( dispatch, own_props ) => ({
   onChange : ( value ) => {
      dispatch( changeFilter( value ) )
   }
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchBox );