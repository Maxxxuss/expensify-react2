import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense } from '../actions/expenses'
// import { startEditExpense, startRemoveExpense } from '../actions/expenses';

function EditExpensePage (props)  { 
  // console.log(props)  
  return( 
  <div>
    <ExpenseForm 
    expense = {props.expense}
    onSubmit ={ (expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}

    />
      <button onClick = {()=> {
      props.dispatch(removeExpense({id: props.expense.id}))
      props.history.push('/')
      } }
      >Remove
     </button>
      {/* Add Edit Seite Seite   ID lautet: {props.match.params.id}  */}
  </div>
) }

// const EditExpensePage = (props) => { 
//   return(
//   <div>
//       Add Edit Seite Seite   ID lautet: {props.match.params.username} 
//   </div>
// ) }
// export class EditExpensePage extends React.Component {
//   onSubmit = (expense) => {
//     this.props.startEditExpense(this.props.expense.id, expense);
//     this.props.history.push('/');
//   };
//   onRemove = () => {
//     this.props.startRemoveExpense({ id: this.props.expense.id });
//     this.props.history.push('/');
//   };
//   render() {
//     return (
//       <div>
//         <div className="page-header">
//           <div className="content-container">
//             <h1 className="page-header__title">Edit Expense</h1>
//           </div>
//         </div>
//         <div className="content-container">
//           <ExpenseForm
//             expense={this.props.expense}
//             onSubmit={this.onSubmit}
//           />
//           <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
//         </div>
//       </div>
//     );
//   }
// };

// const mapStateToProps = (state, props) => ({
//   expense: state.expenses.find((expense) => expense.id === props.match.params.id)
// });

// const mapDispatchToProps = (dispatch, props) => ({
//   startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
//   startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
// });

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense)=>expense.id === props.match.params.id
  )
  }
}

export default connect(mapStateToProps, /*mapDispatchToProps*/)(EditExpensePage);

// export default EditExpensePage