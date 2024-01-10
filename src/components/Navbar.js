import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {  FaShoppingBag, FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ filter, setFiltering, count }) => {
    return (
        <div>
            <nav className='navbar '>
                <div className='logo'>           
                    <div><Link to='/'><i><FaShoppingCart/></i>Mes Courses en Ligne</Link></div>
                    {/* <button className='navbar-toggler' type='button' data-toggle="collapse">
                        <span className='navbar-toggler-icon'></span>
                    </button> */}
                </div>

                <div className='navbar-right' id='navbarSupportedContent'>
                    <div>
                        <form className='search form-inline my-2 my-lg-0'>
                            <input className='input' type='search' placeholder='Rechercher'aria-label='Rechercher' 
                            onChange={(e) => {
                                setFiltering(e.target.value.length > 0)
                                filter(e.target.value)
                            }}/>
                        </form>
                    </div>
                    <div className='menu-right'>
                        <Link to='/cart'>
                            <i><FaShoppingBag/></i>
                            <span className='badge'>{count}</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Navbar;