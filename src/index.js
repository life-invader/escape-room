import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import App from 'components/app/app';
import { store } from './store/store';
import { fetchQuests } from './store/api-action';

store.dispatch(fetchQuests());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
