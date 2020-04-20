import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './App.styles';

const StudiesPage = lazy(() => import('./pages/StudiesPage'));
const StudiesDetailsPage = lazy(() => import('./pages/StudyDetailsPage'));

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route exact path="/" component={StudiesPage} />
            <Route exact path="/studies/:studyId/details" component={StudiesDetailsPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
