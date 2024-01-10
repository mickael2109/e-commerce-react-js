import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Row = () => {
    return(
        <tr>
            <td><img src={process.env.PUBLIC_URL+`./media/fruits/citron.png`} width="170" height="170" alt='citron'/></td>
            <td>ref</td>
            <td>£ price</td>
            <td>
                <div className='btn-group' role='group' aria-label='Basic example'>
                    <button type='button' className="btn btn-secondary">-</button>
                    <span className="btn btn-light qty">1</span>
                    <button type="button" className="btn btn-secondary">+</button>
                </div>
            </td>
            <td>£2.99</td>
            <td><button type='button'className='btn btn-danger remove'>X</button></td>
        </tr>
    )
}


const Table = () => {
    return(
        <table>
            <tr>
                <th width="200">Product</th>
                <th width="80">Reference</th>
                <th width="150">Price</th>
                <th width="150">Quantity</th>
                <th width="200">Total</th>
            </tr>
            <Row/>
            <Row/>
        </table>
    )
}

const CartPage = () => {
    return (
        <div className='container'>
            <div className='cart-page'>
                <div className='col-sm cart'>
                    <Table/>
                </div>
                <div className='col-sm-3 order-summary'>
                    <ul className='list-group'>
                        <li className='list-group-item'>Order Summary</li>
                        <li className='list-group-item'>
                            <ul className='list-group-flex'>
                                <li className='text-left'>SubTotal</li>
                                <li className='text-right'>£0.00</li>
                            </ul>
                            <ul className='list-group-flex'>
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
                        <button type='button' className='btn btn-danger' style={{background:'crimson'}}disabled='true'>
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;