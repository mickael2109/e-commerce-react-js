import React from 'react';
import { List, SildeMenu } from '../components/Component';

const Home = (props) => {
    const { isFiltering, filtered, list, category, loadCategory, addToCart, count } = props
    // const [category, setCategory] = useState('Légumes')
    // const [isFiltering, setFiltering] = useState(false)
    // const [filtered, setFiltered] = useState(false)
    // const [count, setCount] = useState(1)
    // const loadCategory = (e) => {
    //     setCategory(e)
    // }
    // const filterResults = (input) => {
    //     let fullList = list.flat()
    //     let reuslts = fullList.filter(item => {
    //         const name = item.name.toLowerCase()
    //         const term = input.toLowerCase()
    //         return name.indexOf(term) > -1
    //     })
    //     setFiltered(reuslts )
    // }

    return (   
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 sidebar' style={{background:'#E5F1FB' }}>
                        <SildeMenu loadCategory={loadCategory} category={category}/>
                    </div>
                    <div className='col-sm'>
                        <div className='columns'>
                            <List addToCart={addToCart} count={count} data={isFiltering ? filtered : list.find(categoryData => categoryData[0].category === category)} category={category}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Home;