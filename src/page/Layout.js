import React from 'react';
import Navbar from '../components/Navbar';
import { List, SildeMenu } from '../components/Component';
import { list } from '../data/data2';
import { useState } from 'react';

const Layout = () => {
    const [category, setCategory] = useState('Fruits')
    const loadCategory = (e) => {
        setCategory(e)
    }

    return (
        <div>   
            <Navbar/>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 sidebar' style={{background:'#E5F1FB' }}>
                        <SildeMenu loadCategory={loadCategory} category={category}/>
                    </div>
                    <div className='col-sm'>
                        <div className='columns'>
                            <List data={list} category={category}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;