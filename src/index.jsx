import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { createBrowserHistory } from 'history'

import App from './App';
import { store } from './stores/main';

import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();