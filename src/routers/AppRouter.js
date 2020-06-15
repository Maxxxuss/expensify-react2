// import React from 'react';
// import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import NotFoundPage from '../components/NotFoundPage';
// import LoginPage from '../components/LoginPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

// export const history = createHistory();

// const AppRouter = () => (
//   <Router history={history}>
//     <div>
//       <Switch>
//         <PublicRoute path="/" component={LoginPage} exact={true} />
//         <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
//         <PrivateRoute path="/create" component={AddExpensePage} />
//         <PrivateRoute path="/edit/:id" component={EditExpensePage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default AppRouter;

import React from 'react';
import {BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom' // react-roter-dom für WEb anwendungen ..-native für mobile // https://reacttraining.com/react-router/web/guides/quick-start
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header'





const AppRouter = () => {

return(
  <BrowserRouter> 
      <div>
          <Header />
      <Switch>
          <Route path ="/" component= {ExpenseDashboardPage} exact={true} />
          <Route path ="/create" component= {AddExpensePage} />    
          <Route path ="/edit/:id" component= {EditExpensePage} />
          <Route path ="/help" component= {HelpPage} /> 
          <Route component= {NotFoundPage} />      
      </Switch>
      </div>
  </BrowserRouter>

)
}

export default AppRouter