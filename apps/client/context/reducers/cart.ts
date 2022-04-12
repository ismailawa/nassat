import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_CART_ITEM, DELETE_CART_ITEM,
  GET_TO_FROM_CART,
  INCREASE_CART_ITEM
} from "../../constants/actionTypes";



const cart = (state, { payload, type }) => {

  switch (type) {
    case ADD_TO_CART:
     if(localStorage.getItem('cart')){
       console.log("existing.....",localStorage.getItem('cart'));
      const cartParse = JSON.parse(localStorage.getItem('cart'));
      const foundItem = cartParse.find(item => item.product._id === payload._id);
      const indexOfItem = cartParse.indexOf(foundItem);
      if(indexOfItem !== -1){
        cartParse[indexOfItem].quantity += 1;
        cartParse[indexOfItem].totalPrice = cartParse[indexOfItem].product.price * cartParse[indexOfItem].quantity;
        localStorage.setItem('cart', JSON.stringify(cartParse));

      }else {
        cartParse.push({product: payload, quantity: 1, totalPrice: payload.price});
        localStorage.setItem('cart', JSON.stringify(cartParse));
      }

       return {
         ...state,
         cart: cartParse
       };
     }else{
       console.log('not existing....',payload);
       localStorage.setItem('cart', JSON.stringify([{product: payload, quantity: 1, totalPrice: payload.price}]));
       return {
         ...state,
         cart: [...state.cart, {product: payload, quantity: 1, totalPrice: payload.price}]
       };
     }

    case INCREASE_CART_ITEM:
      if(localStorage.getItem('cart')){
        const cartParse = JSON.parse(localStorage.getItem('cart'));
        const foundItem = cartParse.find(item => item.product._id === payload._id);
        const indexOfItem = cartParse.indexOf(foundItem);
        if(indexOfItem !== -1){
          cartParse[indexOfItem].quantity += 1;
          cartParse[indexOfItem].totalPrice = cartParse[indexOfItem].product.price * cartParse[indexOfItem].quantity;
          localStorage.setItem('cart', JSON.stringify(cartParse));

        }
        return {
          ...state,
          cart: cartParse
        };
      }
      return {
        ...state
      };

    case DECREASE_CART_ITEM:
      if(localStorage.getItem('cart')){
        const cartParse = JSON.parse(localStorage.getItem('cart'));
        const foundItem = cartParse.find(item => item.product._id === payload._id);
        const indexOfItem = cartParse.indexOf(foundItem);
        if(indexOfItem !== -1){
          cartParse[indexOfItem].quantity -= 1;
          cartParse[indexOfItem].totalPrice = cartParse[indexOfItem].product.price * cartParse[indexOfItem].quantity;
          localStorage.setItem('cart', JSON.stringify(cartParse));
        }
        return {
          ...state,
          cart: cartParse
        };
      }
      return {
        ...state
      };
    case DELETE_CART_ITEM:
      if(localStorage.getItem('cart')){
        console.log("existing.....",localStorage.getItem('cart'));
        const cartParse = JSON.parse(localStorage.getItem('cart'));
        const foundItem = cartParse.find(item => item.product._id === payload._id);
        const indexOfItem = cartParse.indexOf(foundItem);
        if(indexOfItem !== -1){
          cartParse.splice(indexOfItem, 1);
          localStorage.setItem('cart', JSON.stringify(cartParse));

        }
        return {
          ...state,
          cart: cartParse
        };
      }
      return {
        ...state,
      };
    case GET_TO_FROM_CART:
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem('cart')) || []
      };

      case CLEAR_CART:
      localStorage.removeItem('cart');
        return {
          ...state,
          cart: []
        };
    default:
      return state;
  }
};

export default cart;
