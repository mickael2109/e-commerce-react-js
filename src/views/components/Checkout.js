import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserProfileContext } from '../../lib/UserProfileContext';

const Checkout = () => {
    const [isValid, setValid] = useState(false)
    const value = useContext(UserProfileContext)
    const {
        firstName,
        lastName,
        email,
        adresse,
        zipCode,
        city,
        setUserProfileContext
    } = value
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
            <div className='checkout-page'>
                <div className='checkout-content'>
                    <h2>Checkout</h2>
                    <br/>
                    <form>
                        <div className='row input-checkout'>
                            <div className='col'>
                                <input type='text' className='form-control' name='firstName' placeholder='First name' property='' defaultValue={firstName} onChange={(e) => setUserProfileContext({ [e.target.name]: e.target.value})}/>
                            </div>
                            <div className='col'>
                                <input type='text' className='form-control' name='lastName' placeholder='Last name' property='' defaultValue={lastName} onChange={(e) => setUserProfileContext({ [e.target.name]: e.target.value})}/>
                            </div>
                        </div>
                        <br/>
                        <div className='form-group'>
                            <input type='text' className='form-control' name='email'id='exampleInputEmail' placeholder='Email' property='' defaultValue={email} onChange={(e) => setUserProfileContext({ [e.target.name]: e.target.value})}/>
                            <small id='emailHelp' className='form-text text-muted'>We'll never share tyour email with anyone else</small>
                        </div>
                        <br/>
                        <div className='form-group'>
                            <input type='text' className='form-control' name='adresse' id='exampleInputEmail' placeholder='Adresse' property='' defaultValue={adresse} onChange={(e) => setUserProfileContext({ [e.target.name]: e.target.value})}/>
                        </div>
                        <br/>
                        <div className='row input-checkout'>
                            <div className='col'>
                                <input type='text' className='form-control' name='zipCode' placeholder='Postal Code' property='' defaultValue={zipCode} onChange={(e) => setUserProfileContext({ [e.target.name]: e.target.value})}/>
                            </div>
                            <div className='col'>
                                <input type='text' className='form-control' name='city' placeholder='City' property='' defaultValue={city} onChange={(e) => setUserProfileContext({ [e.target.name]: e.target.value})}/>
                            </div>
                        </div>
                        <br/>
                        <Link to={`${!isValid ? "/checkout" : "/confirm"}`} className={` ${!isValid && 'disabled'} checkout`}>
                            <div className='place-btn'>
                                    Confirmer
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Checkout;