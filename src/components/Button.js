import React from 'react';

const Button = ( props ) => {
   // Overwrite the onClick callback (if there was such)
   // just to make sure that the click event
   // will not be propagated to the parents.
   const onClick = ( event ) => {
      event.stopPropagation();
      ( props.onClick || function () {} )();
   };

   return (
      <span { ...props } onClick={ onClick }></span>
   );
};

export default Button;