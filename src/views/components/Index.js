import React, { Fragment, useEffect, useState } from 'react';
import { Route, Router } from 'react-router-dom';
import UserProfileContextProvider from '../../lib/UserProfileContext';
import Navbar from '../../components/Navbar';
import Home from './Home';
import CartPage from './CartPage';
import Checkout from './Checkout';
import { list } from '../../data/data2';

const App = props => {

    const { items, saveLocalStorage } = props
    const [category, setCategory] = useState('Légumes')
    const [isFiltering, setFiltering] = useState(false)
    const [filtered, setFiltered] = useState(false)
    const [count, setCount] = useState(1)
    const loadCategory = (e) => {
        setCategory(e)
    }
    const filterResults = (input) => {
        let fullList = list.flat()
        let reuslts = fullList.filter(item => {
            const name = item.name.toLowerCase()
            const term = input.toLowerCase()
            return name.indexOf(term) > -1
        })
        setFiltered(reuslts )
    }
    
    useEffect(() => {
        saveLocalStorage(items)
    }, [items])

    return (
        <Fragment>
            <Router>
                {/* <UserProfileContextProvider> */}
                    <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>

                    {/* ROUTES */}
                    <Route index element={ <Home 
                                                    category={category} 
                                                    loadCategory={loadCategory} 
                                                    list={list}
                                                    isFiltering={isFiltering}
                                                    filtered={filtered}/>
                                                    }/>
                    <Route path='/cart' element={<CartPage/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>

                {/* </UserProfileContextProvider> */}
            </Router>
        </Fragment>
    );
};

export default App;