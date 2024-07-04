import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { PokemonProvider } from './contexts/PokemonContext';
import AppRoutes from './routes';
import Header from './components/Header';

const locale = navigator.language.split(/[-_]/)[0];

const App: React.FC = () => {

  return (
    <IntlProvider locale={locale}>
      <Router>
        <PokemonProvider>
          <Header />
          <AppRoutes />
        </PokemonProvider>
      </Router>
    </IntlProvider>
  );
};

export default App;
