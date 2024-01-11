import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../views/components/Home';
import CartPage from '../views/components/CartPage';
import { useState } from 'react';
import { list } from '../data/data2';

const Index = () => {

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
    return (
        <div>
            <Routes>
                <Route element={<Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>}>
                    <Route index element={ <Home 
                                                    category={category} 
                                                    loadCategory={loadCategory} 
                                                    addToCart={setCount} 
                                                    count={count}
                                                    list={list}
                                                    isFiltering={isFiltering}
                                                    filtered={filtered}/>
                                                    }/>
                    <Route path='/cart' element={<CartPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default Index;