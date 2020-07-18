import React from 'react'
import { Link } from "react-router-dom"
import Logo from './logo.png'
import Plus from './plus.svg'

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center flex-column-sm">

                    <Link to='/' className="col d-flex justify-content-center-sm">
                        <img className="logo" src={Logo} alt="" />
                    </Link>

                    <div className="col d-flex justify-content-center justify-content-center-sm ">
                        <h1 className="page-name">GALLERY</h1>
                    </div>

                    <div className="col d-flex justify-content-end justify-content-center-sm ">
                        <Link to='/books/new' className="btn-add">
                            <img src={Plus} />
                        </Link>
                    </div>

                </div>
            </div>

        </header >
    )
}

export default Header

