import React from 'react';
import Button from '../components/Button';

class RedirectItem extends React.Component {
   render() {
      return (
         <div className="sk-mp-redirects-item">
            <span className="sk-mp-redirects-item-title">{ this.props.name }</span>
            <Button className="sk-mp-redirects-item-btn btn-delete"></Button>
            <Button className="sk-mp-redirects-item-btn btn-edit"></Button>
         </div>
      );
   }
}

export default RedirectItem;
