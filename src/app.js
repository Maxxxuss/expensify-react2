import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// import 'normalize.css/normalize.css'; // Not working
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStrore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss';


// WEiter 1:31:05

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


ReactDOM.render(jsx, document.getElementById('app'));