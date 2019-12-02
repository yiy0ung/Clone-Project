import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import store from './store';
import App from './components/App';

const Root: React.SFC = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Root;