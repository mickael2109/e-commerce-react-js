import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartPage = () => {
    return (
        <div className='row cart-page'>
            <div className='col-sm cart'>
    
            </div>
            <div className='col-sm-3 order-summary'>
                <ul className='list-group'>
                    <li className='list-group-item'>Order Summary</li>
                    <li className='list-group-item'>
                        <ul className='list-group-flex'>
                            <li className='text-left'>SubTotal</li>
                            <li className='text-right'>£0.00</li>
                        </ul>
                        <ul>
                            <li className='text-left'>Shopping</li>
                            <li className='text-right'>£0.00</li>
                        </ul>
                        <ul className='list-group flex'>
                            <li className='coupon crimson'>
                                <small><i><FaChevronRight/></i>Add Coupon Code</small>
                            </li>
                        </ul>
                    </li>
                    <li className='list-group-item'>
                        <ul className='list-group flex'>
                            <li className='text-left'>Total</li>
                            <li className='text-right'>£0.00</li>
                        </ul>
                    </li>
                </ul>
                <Link to="">
                    <button type='button' disabled='true'>
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CartPage;