import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink exact to="/books">Books Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inactive-books">Inactive books</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
