import {combineReducers} from 'redux';
import {productReducer} from 'redux';

const reducers = combineReducers({
    allProducts : productReducer,
});