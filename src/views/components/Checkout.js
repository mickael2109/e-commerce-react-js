import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [isValid, setValid] = useState(false)
    const valide = () => {
        let erros = []
        const input = document.querySelectorAll(".form-control")
        input.forEach(input => {
            !input.value ? erros.push(input) : erros.length && erros.pop()
        })
        setValid(!erros.length)
        
    }

    useEffect(() => {
        valide()
    })

    return (
        <Fragment>
            <div className='col-sm-6 offset-3'>
                <h2>Checkout</h2>
                <br/>
                <form>
                    <div className='row'>
                        <div className='col'>
                            <input type='text' className='form-control' placeholder='First name' property='' defaultValue=''/>
                        </div>
                        <div className='col'>
                            <input type='text' className='form-control' placeholder='Last name' property='' defaultValue=''/>
                        </div>
                    </div>
                    <br/>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='exampleInputEmail' placeholder='Email' property='' defaultValue=''/>
                        <small id='emailHelp' className='form-text text-muted'>We'll never share tyour email with anyone else</small>
                    </div>
                    <br/>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='exampleInputEmail' placeholder='Adress' property='' defaultValue=''/>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col'>
                            <input type='text' className='form-control' placeholder='Postal Code' property='' defaultValue=''/>
                        </div>
                        <div className='col'>
                            <input type='text' className='form-control' placeholder='City' property='' defaultValue=''/>
                        </div>
                    </div>
                    <br/>
                    <Link to="/checkout" className={` ${!isValid && 'disabled'} checkout`}>
                        <div className='place-btn'>
                                Confirm
                        </div>
                    </Link>
                    {/* <button type='button' className='btn btn-danger' style={{background:'crimson'}}>
                        <Link to=''>Confirm</Link>
                    </button> */}
                </form>
            </div>
        </Fragment>
    );
};

export default Checkout;