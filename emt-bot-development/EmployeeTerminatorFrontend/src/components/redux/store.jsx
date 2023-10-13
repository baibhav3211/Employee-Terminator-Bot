import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./User.jsx"
import authReducer from './Auth.jsx'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'iws',
    storage
};

const persistUserReducer = persistReducer(persistConfig, userReducer);
const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        user:persistUserReducer,
        auth:persistAuthReducer
    }
});

export const persistedStore = persistStore(store);