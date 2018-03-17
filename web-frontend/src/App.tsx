import * as React from 'react';

import 'semantic-ui-css/semantic.min.css';

import AppLayout from './components/AppLayout';
import HomePage from './components/HomePage';

const App: React.SFC = () => (
  <AppLayout>
    <HomePage />
  </AppLayout>
);

export default App;
