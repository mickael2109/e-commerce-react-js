import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCart, updateCart } from '../../lib/actions';


const Row = ( props ) => {
    const {id, quantity, details} = props.item
    const [qty, setQty] = useState(quantity)
    const dispatch = useDispatch()
    const update = (action)  => {
        if(action === 'increment') { setQty(qty + 1)}
        if(action === 'decrement') { setQty(qty - 1)}
    }  
    const remove = id => {
        dispatch(removeCart(id))
    }

    useEffect(() => {
        dispatch(updateCart(id, qty));
    }, [qty])
    return(
        <tr key={id}>
            <td><img src={process.env.PUBLIC_URL+`./media/${details.category}/${details.image}`} width="170" height="170" alt='citron'/></td>
            <td>{details.ref}</td>
            <td>£{details.price}</td>
            <td>
                <div className='btn-group' role='group' aria-label='Basic example'>
                    <button type='button' className="btn btn-secondary" onClick={() => { 
                        if(qty>1){ update('decrement') } }}>-</button>
                    <span className="btn btn-light qty">{qty}</span>
                    <button type="button" className="btn btn-secondary" onClick={() => { update('increment')}}>+</button>
                </div>
            </td>
            <td>£{(quantity * details.price).toFixed(2)}</td>
            <td><button type='button'className='btn btn-danger remove' onClick={() => remove(id)}>X</button></td>
        </tr>
    )
}


const Table = ({ items }) => {

    return(
        <table>
            <tr>
                <th width="200">Product</th>
                <th width="90">Reference</th>
                <th width="150">Price</th>
                <th width="150">Quantity</th>
                <th width="200">Total</th>
            </tr>
            {
                items.map((item, index) => {
                    return(
                        <Row key={index} item={item}/>
                    )})
            }
        </table>
    )
}

const CartPage = () => {
    const items = useSelector(state => state.items)
    const [subTotal, setSubTotal] = useState(0.00)
    const [total, setTotal] = useState(0.00)
    const shipping = 10.00

    useEffect(() => {
        let totals = items.map(item => {
            return item.quantity * item.details.price
        })
        setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0))
        setTotal(subTotal + shipping)
        
    }, [items, subTotal, total])

    return (
        <div className='container'>
            <div className='cart-page'>
                <div className='col-sm cart'>
                    <Table items={items}/>
                </div>

                <div className='col-sm-3 order-summary'>
                    <ul className='list-group'>
                        <li className='list-group-item'>Order Summary</li>
                        <li className='list-group-item'>
                            <ul className='list-group-flex'>
                                <li className='text-left'>Subtotal</li>
                                <li className='text-right'>£{subTotal.toFixed(2)}</li>
                            </ul>
                            <ul className='list-group-flex'>
                                <li className='text-left'>Shipping</li>
                                <li className='text-right'>£{shipping.toFixed(2)}</li>
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
                                <li className='text-right'>£{subTotal === 0.00 ? "0.00" : total.toFixed(2)}</li>
                            </ul>
                        </li>
                    </ul>
                    <Link to={`${items.length === 0 ? "/cart" : "/checkout"}`} className={`checkout ${!items.length && 'disabled'}`}>
                        <div className='place-btn'>
                                Checkout
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;