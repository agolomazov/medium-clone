import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import { TopBar } from 'components/top-bar';
import { CurrentUserChecker } from 'components/current-user-checker';
import { CurrentUserProvider } from 'contexts/currentUser';

const App = () => (
  <CurrentUserProvider>
    <CurrentUserChecker>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </CurrentUserChecker>
  </CurrentUserProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));

