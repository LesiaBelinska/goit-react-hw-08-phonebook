import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from "./auth/authSlice.js";
import { filterSlice } from "./contacts/filterSlice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const persistedReducer = persistReducer(
    authPersistConfig,
    authSlice,
);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        filter: filterSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});

export const persistor = persistStore(store);