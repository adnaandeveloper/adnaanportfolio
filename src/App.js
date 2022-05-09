import React from 'react';
import { Layout, Menu } from 'antd';
import AppHeader from './components/common/Header';
const { Header } = Layout;

const App = () => {
  return (
    <div>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
      </Layout>
    </div>
  );
};

export default App;
