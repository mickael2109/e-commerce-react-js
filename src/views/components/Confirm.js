import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserProfileContext } from '../../lib/UserProfileContext'
import { useDispatch } from 'react-redux';
import { resetCart } from '../../lib/actions';

const Confirm = () => {

    const userProfile = useContext(UserProfileContext)
    // const items = useSelector(state => state.items)
    const dispatch = useDispatch()
    const reset = () => {
        dispatch(resetCart())
    }

    return (
        <Fragment>
            <div className='jumbotron text-center'>
                <h1 className='display-3'>Thank You</h1>
                <hr/>

                <p className='lead'>
                    <strong>Your order is on its way to your home</strong>
                    <br/><br/>
                    <Link className='btn btn-primary btn-sm' to='/' onClick={() => reset()}>Continue to HomePage</Link>
                </p>
                <br/>

                {
                    userProfile.adresse &&
                        <ul>
                            <li>{(userProfile.lastName).toUpperCase()}, {userProfile.firstName}</li>
                            <li>{userProfile.adresse}</li>
                            <li>{userProfile.zipCode}</li>
                        </ul>
                }
            </div>
        </Fragment>
    );
};

export default Confirm;