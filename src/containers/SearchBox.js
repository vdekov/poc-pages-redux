import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import { getCurrentFilter } from '../selectors';

class SearchBox extends React.Component {
   constructor( props ) {
      super( props );
      this.handleChange = this.handleChange.bind( this );
      this.clearValue   = this.clearValue.bind( this );
      this.onFocusInput = this.onFocusInput.bind( this );
      this.onBlurInput  = this.onBlurInput.bind( this );

      this.state = {
         is_focused : false,
      };
   }

   render() {
      return (
         <div className={ this.getCSSClasses() }>
            <input
               type="text"
               placeholder={ this.props.placeholder }
               value={ this.props.value }
               onChange={ this.handleChange }
               onFocus={ this.onFocusInput }
               onBlur={ this.onBlurInput }
            />
            { ! this.props.value && <span className="sk-mp-searchbox-magnifier"></span> }
            { this.props.value && <span className="sk-mp-searchbox-clear" onClick={ this.clearValue }></span> }
         </div>
      );
   }

   getCSSClasses() {
      return [
         'sk-mp-searchbox',
         ( this.state.is_focused ? ' focused' : '' ),
      ].join( '' );
   }

   handleChange( event ) {
      this.props.onChange( event.target.value )
   }

   clearValue() {
      this.props.onChange( '' );
   }

   onFocusInput() {
      this.setState({
         is_focused : true,
      });
   }

   onBlurInput() {
      this.setState({
         is_focused : false,
      });
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
