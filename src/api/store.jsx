// const persistConfig = {
//   key: "root",
//   storage,

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "../user/userSlice";

// };
const reducer = combineReducers({
  users: auth,
});
// const persistReducers = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: reducer,
});

// export const persistor = persistStore(store);
