import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Confirm = () => {
    return (
        <Fragment>
            <div className='jumbotron text-center'>
                <h1 className='display-3'>Thank You</h1>
                <hr/>

                <p className='lead'>
                    <strong>Your order is on its way to your home</strong>
                    <br/><br/>
                    <Link className='btn btn-primary btn-sm' to='/'>Continue to HomePage</Link>
                </p>
            </div>
        </Fragment>
    );
};

export default Confirm;