import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'

//not using this component currently, just for practice

function Menu(props) {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            {!props.isAuthenticated ? <NavLink to='/login'>Login</NavLink> : null}
            {!props.isAuthenticated ? <NavLink to='/register'>Register</NavLink> : null}
            {props.isLoggenIn ? <NavLink to='/add-book'>Add Book</NavLink> : null}
        </div>
    )
}

// class Menu extends Component {
//     render() {
//         return (
//             <div>
//                 <h3><NavLink to='/'>Home</NavLink></h3>
//                 <h3><NavLink to='/add-book'>Add Book</NavLink></h3>
//                 <h3><NavLink to='/books'>View Books</NavLink></h3>
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.userReducer.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu)
