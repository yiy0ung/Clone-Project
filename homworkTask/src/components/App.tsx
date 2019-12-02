import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Pages from '../pages';

const App: React.SFC = () => {
  return (
    <Switch>
      <Route
        exact
        path={'/'}
        render={() => <Pages.Home/>}
      />
    </Switch>
  );
}

export default App;
