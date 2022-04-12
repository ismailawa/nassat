import {
  ADD_TO_FAVOURITE,
  DELETE_FAVOURITE_ITEM,
  CLEAR_FAVOURITE,
  GET_FROM_FAVOURITE,
} from '../../constants/actionTypes';

const favourite = (state, { payload, type }) => {
  switch (type) {
    case ADD_TO_FAVOURITE:
      if (localStorage.getItem('favourite')) {
        const favouriteParse = JSON.parse(localStorage.getItem('favourite'));
        const foundItem = favouriteParse.find(
          (item) => item.product._id === payload._id
        );
        const indexOfItem = favouriteParse.indexOf(foundItem);
        if (indexOfItem !== -1) {
          favouriteParse.splice(indexOfItem, 1);
          localStorage.setItem('favourite', JSON.stringify(favouriteParse));
        } else {
          favouriteParse.push({
            product: payload,
          });
          localStorage.setItem('favourite', JSON.stringify(favouriteParse));
        }
        console.log('existing.....', favouriteParse);
        return {
          ...state,
          favourite: favouriteParse,
        };
      } else {
        console.log('not existing....', payload);
        localStorage.setItem(
          'favourite',
          JSON.stringify([{ product: payload }])
        );
        return {
          ...state,
          favourite: [...state.favourite, { product: payload }],
        };
      }

    case DELETE_FAVOURITE_ITEM:
      if (localStorage.getItem('favourite')) {
        console.log('existing.....', localStorage.getItem('favourite'));
        const favouriteParse = JSON.parse(localStorage.getItem('favourite'));
        const foundItem = favouriteParse.find(
          (item) => item.product._id === payload._id
        );
        const indexOfItem = favouriteParse.indexOf(foundItem);
        if (indexOfItem !== -1) {
          favouriteParse.splice(indexOfItem, 1);
          localStorage.setItem('favourite', JSON.stringify(favouriteParse));
        }
        return {
          ...state,
          cart: favouriteParse,
        };
      }
      return {
        ...state,
      };
    case GET_FROM_FAVOURITE:
      return {
        ...state,
        favourite: JSON.parse(localStorage.getItem('favourite')) || [],
      };

    case CLEAR_FAVOURITE:
      localStorage.removeItem('favourite');
      return {
        ...state,
        favourite: [],
      };
    default:
      return state;
  }
};

export default favourite;
