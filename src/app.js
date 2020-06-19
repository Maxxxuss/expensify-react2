import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// import 'normalize.css/normalize.css'; // Not working
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStrore';
import { startSetExpenses } from './actions/expenses'
// import { setTextFilter } from './actions/filters'
import { login, logout } from './actions/auth'

import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss';
import {firebase} from './firebase/firebase' 


// WEiter 5:41:25

import './styles/styles.scss';

const store = configureStore()

// store.dispatch(addExpense ({description: 'Water bill', amount:880}))
// store.dispatch(addExpense ({description: 'Ges bill', createdAt:2000}))
// store.dispatch(addExpense ({description: 'resnt', amount:1231}))

// store.dispatch(setTextFilter ())

// // setTimeout(()=>{
// //     store.dispatch(setTextFilter ('übung'))

// // }, 1500)

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

// console.log(visibleExpenses)

const jsx =(
    <Provider store = {store}>
         <AppRouter />
         
     </Provider>
    
)

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

// ReactDOM.render(<LoadingPage />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));


// store.dispatch(startSetExpenses()).then(()=> {  
//     ReactDOM.render(jsx, document.getElementById('app'))
// })
// ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
// firebase.auth().onAuthStateChanged((user)=>{
//     if (user) {
//         console.log('loged in')
//     }else{
//         console.log('loged out')
// }
// })