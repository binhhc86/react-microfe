import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
const generateClassName = createGenerateClassName({
  productionPrefix: 'ct-',
});

export default () => {
  return <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router>
            <div>
              <Header />
              <MarketingApp />
            </div>
      </Router>
    </StylesProvider>
  </div>
};
