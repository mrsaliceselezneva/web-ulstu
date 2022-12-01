// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import * as reducers from './reducers';

// const middleware = getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: false,
//     thunk: true,
// });

// const store = configureStore({
//     reducer: { ...reducers },
//     middleware,
//     devTools: process.env.NODE_ENV !== 'production',
// });

// export default store

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

<<<<<<< HEAD:src/reduxMessage/storeMax.js
const storeMax = createStore(
=======
const messagesStore = createStore(
>>>>>>> max:src/reduxMessage/store.js
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

<<<<<<< HEAD:src/reduxMessage/storeMax.js
export default storeMax;
=======
export default messagesStore;
>>>>>>> max:src/reduxMessage/store.js
