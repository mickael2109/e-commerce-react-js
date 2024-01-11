import React from 'react';
import { List, SildeMenu } from '../../components/Component';

const Home = (props) => {
    const { isFiltering, filtered, list, category, loadCategory, updateCart } = props

    return (   
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 sidebar' style={{background:'#E5F1FB' }}>
                        <SildeMenu loadCategory={loadCategory} category={category}/>
                    </div>
                    <div className='col-sm'>
                        <div className='columns'>
                            <List updateCart={updateCart} data={isFiltering ? filtered : list.find(categoryData => categoryData[0].category === category)} category={category}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Home;