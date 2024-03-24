import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './pages/userReducer';

// create an instance of the store
const rootReducers = combineReducers({
  users: userReducer,
});

const rootReducer = combineReducers({
    reducer: userReducer,
})

const App = () => {
  // set the store instance
  return (
	  <Provider store={store}>
		  <RouterProvider router={router} />
	  </Provider>
  );
};

export default App;