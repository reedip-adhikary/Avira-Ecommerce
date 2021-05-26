
import categoryReducer from './category.reducer';
import producrtReducer from './product.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    category: categoryReducer,
    product: producrtReducer
});

export default rootReducer;