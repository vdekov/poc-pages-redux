import * as actions from './index';

describe( 'Manage pages actions', () => {
   it( 'changeFilter should create CHANGE_FILTER action', () => {
      expect( actions.changeFilter( 'John Doe' ) ).toEqual({
         type   : 'CHANGE_FILTER',
         filter : 'John Doe'
      })
   });
   it( 'publishPage should create PUBLISH_PAGE action', () => {
      expect( actions.publishPage( 125 ) ).toEqual({
         type : 'PUBLISH_PAGE',
         id   : 125
      })
   })
});