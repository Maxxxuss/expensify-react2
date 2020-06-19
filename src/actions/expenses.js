import {v4 as uuidv4 } from 'uuid';

import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  // return (dispatch) => {
    return (dispatch) => {

    const uid = getState().auth.uid;    //UID für firebase login
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

  //   return database.ref('expenses').push(expense).then(( ref)=>{
  //     dispatch(addExpense({
  //       id: ref.key, 
  //       ...expense
  //    } ))
  //   })
  // }
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {  //UID für firebase login
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({ 
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  // return (dispatch) => {
    const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {

    // return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
// };

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  // return (dispatch) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {

    // return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
// };

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});


export const startSetExpenses = () => {
  // return (dispatch) => {
     return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // return database.ref('expenses').once('value').then((snapshot)=>{
       return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {

      const expenses = []

      snapshot.forEach((childSnapshot)=>{
        expenses.push({
          id: childSnapshot.key, 
          ...childSnapshot.val()
        })
      })
      dispatch(setExpenses(expenses))
    })
  }
}

// export const startSetExpenses = () => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });

//       dispatch(setExpenses(expenses));
//     });
//   };
// };

// before firebase 

// // ADD_EXPENSE
  // export const addExpense = (
  //   {
  //     description = '',
  //     note = '',
  //     amount = 0,
  //     createdAt = 0
  //   } = {}
  // ) => ({
  //   type: 'ADD_EXPENSE',
  //   expense: {
  //     id: uuidv4(),
  //     description,
  //     note,
  //     amount,
  //     createdAt
  //   }
  // });

  // // REMOVE_EXPENSE
  // export const removeExpense = ({ id } = {}) => ({
  //   type: 'REMOVE_EXPENSE',
  //   id
  // });

  // // EDIT_EXPENSE
  // export const editExpense = (id, updates) => ({
  //   type: 'EDIT_EXPENSE',
  //   id,
  //   updates
  // }); 