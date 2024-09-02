import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
//import { logger } from './middlewares/logger';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => 
        getDefaultMiddleWare().concat()
})

export default store;