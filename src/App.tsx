import React from 'react';
import Layout from './containers/layout/layout';

import Home from './pages/home';

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
