import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div>
                <div><NavLink to='/'>Home</NavLink></div>
                <div><NavLink to='/add-book'>Add Book</NavLink></div>
                <div><NavLink to='/books/2'>Book Details</NavLink></div>
                <div>Add Name</div>
            </div>
        )
    }
}

export default Menu
