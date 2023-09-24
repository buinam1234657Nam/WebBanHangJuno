import { configureStore } from '@reduxjs/toolkit';
import products from './reducers/products';
import InformationUse from './reducers/InformationUse';
const store = configureStore({
    reducer: {
        product: products,
        informationUse: InformationUse,
    },
});
export default store;
