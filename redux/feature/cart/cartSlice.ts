import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';
import { CartProductType } from '@/libs/difinition';

// Load the initial state from localStorage or use the default initial state
const loadStateFromLocalStorage = () => {
	try {
	  const serializedState = localStorage.getItem('cart');
	  if (serializedState === null) {
		return {
		  products: [] as CartProductType[],
		  totalPrice: 0,
		};
	  }
	  return JSON.parse(serializedState);
	} catch (e) {
	  console.error('Could not load state from localStorage', e);
	  return {
		products: [] as CartProductType[],
		totalPrice: 0,
	  };
	}
  };
  
  // Save the state to localStorage
  const saveStateToLocalStorage = (state: any) => {
	try {
	  const serializedState = JSON.stringify(state);
	  localStorage.setItem('cart', serializedState);
	} catch (e) {
	  console.error('Could not save state to localStorage', e);
	}
  };


const initialState = loadStateFromLocalStorage();


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProductType>) => {
		const productExists = state.products.some(
		  (product: { slug: string; }) => product.slug === action.payload.slug
		);
  
		if (!productExists) {
		  state.products.push(action.payload);
		  const price = parseFloat(action.payload.price.toString());
		  state.totalPrice += price;
		  saveStateToLocalStorage(state); // Save state to localStorage
		}
	  },
	  removeFromCart: (state, action: PayloadAction<string>) => {
		const product = state.products.find((product: { slug: string; }) => product.slug === action.payload);
		if (product) {
		  state.totalPrice -= product.price;
		  state.products = state.products.filter((p:{slug:string}) => p.slug !== action.payload);
		  saveStateToLocalStorage(state); // Save state to localStorage
		}
	  },
	  incrementQuantity: (state, action: PayloadAction<string>) => {
		const product = state.products.find(
		  (product: { slug: string; }) => product.slug === action.payload
		);
		if (product) {
		  product.quantity = (product.quantity || 0) + 1;
		  state.totalPrice = Number(state.totalPrice) + Number(product.price);
		  saveStateToLocalStorage(state); // Save state to localStorage
		}
	  },
	  decrementQuantity: (state, action: PayloadAction<string>) => {
		const product = state.products.find(
		  (product: { slug: string; }) => product.slug === action.payload
		);
		if (product && (product.quantity || 0) > 1) {
		  product.quantity = (product.quantity || 0) - 1;
  
		  state.totalPrice = Number(state.totalPrice) - Number(product.price);
		  saveStateToLocalStorage(state); // Save state to localStorage
		}
	  },
	  },
  },
);

// export actions
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

// create selector
export const selectProducts = (state: RootState) => state.cart.products;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;