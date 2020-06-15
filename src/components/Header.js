import React from 'react';
import { NavLink } from 'react-router-dom';

// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { startLogout } from '../actions/auth';

// export const Header = ({ startLogout }) => (
//   <header className="header">
//     <div className="content-container">
//       <div className="header__content">
//         <Link className="header__title" to="/dashboard">
//           <h1>Budget App</h1>
//         </Link>
//         <button className="button button--link" onClick={startLogout}>Logout</button>
//       </div>
//     </div>
//   </header>
// );

// const mapDispatchToProps = (dispatch) => ({
//   startLogout: () => dispatch(startLogout())
// });

// export default connect(undefined, mapDispatchToProps)(Header);


const Header = () => { 
  return(
  <header>
     <h1>Expensify</h1> 
     <NavLink to= "/" activeClassName ="is-active" exact={true}>Dashborad</NavLink>
     <NavLink to= "/create"  activeClassName ="is-active">Create Expense</NavLink>
     <NavLink to= "/edit"  activeClassName ="is-active">Edit ExpensePage</NavLink>
     <NavLink to= "/help" activeClassName ="is-active" >Help</NavLink>
  </header>
)}

export default Header