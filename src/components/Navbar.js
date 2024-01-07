import React from 'react';
import { Link } from 'react-router-dom';
import {  FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar '>
                <div className='logo'>           
                    <div><Link href=''><i><FaShoppingCart/></i>Mes Courses en Ligne</Link></div>
                    <button className='navbar-toggler' type='button' data-toggle="collapse">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                </div>

                <div className='' id='navbarSupportedContent'>
                    <div className='ml-auto cart'>
                        <div>
                            <form className='search form-inline my-2 my-lg-0'>
                                <input className='input' type='search' placeholder='Rechercher'aria-label='Rechercher'/>
                            </form>
                        </div>
                        <div className='menu-right'></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;