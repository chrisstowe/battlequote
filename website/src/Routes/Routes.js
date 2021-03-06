/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Routes component.
 *              Defines all the routes for the website.
 */

import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory'
import {
  Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

// Import the components that represent each page.
import Home from '../Home/Home';
import About from '../About/About';
import Design from '../Design/Design';
import Issues from '../Issues/Issues';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';

const history = createBrowserHistory();
let prevLocation = {};

history.listen(location => {
  // Update Google Analytics on virtual page changes.
  // This is required to handle client routing.
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview');

  // Update the scroll position on actual page changes.
  const pathChanged = prevLocation.pathname !== location.pathname;
  if (pathChanged) {
    window.scrollTo(0, 0);
  }
  prevLocation = location;
});

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/design" component={Design} />
      <Route path="/issues" component={Issues} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />

      {
      /* Redirects to the /404 path when all else fails.
          The /404 route is then resolved. */
      }
      <Redirect from="/*" to="/404" />
    </Switch>
  </Router>
);

export default Routes;
