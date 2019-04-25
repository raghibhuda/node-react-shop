/*
 *
 * Product reducer
 *
 */
// import produce from 'immer';

import produce from 'immer';
import { DEFAULT_ACTION, GET_ALL_PRODUCTS } from './constants';

export const initialState = {
  // products:[]
};

/* eslint-disable default-case, no-param-reassign */
const productReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:{
        return state;
      }
      case GET_ALL_PRODUCTS: {
        console.log(action.data,"=========action reducer==========");
        return action.data;
      } 
    }
  });

export default productReducer;
// import { fromJS } from 'immutable';
// import { DEFAULT_ACTION, GET_ALL_PRODUCTS} from './constants';



// export const initialState = fromJS({
//   pro: []
// });

// function productReducer(state = initialState, action) {
//   switch (action.type) {
//     case DEFAULT_ACTION:{
//       return state;
//     }
      
//     case GET_ALL_PRODUCTS:{
//       console.log(action.data,"=========action reducer==========");
//       return state.setIn('pro', action.data);
//       // return state;
//     }
    
    
//     default:
//       return state;
//   }
// }

// export default productReducer;
