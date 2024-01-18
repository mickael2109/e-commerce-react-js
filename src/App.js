import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { list } from './data/data2';
import Navbar from './components/Navbar';
import Home from './views/components/Home';
import CartPage from './views/components/CartPage';
import Checkout from './views/components/Checkout';
import UserProfileContextProvider from './lib/UserProfileContext';
import Confirm from './views/components/Confirm';

function App(props) {
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
      <BrowserRouter>
        <UserProfileContextProvider>
          <Routes>
            <Route element={ <Navbar filter={filterResults} setFiltering={setFiltering} count={count} />}>
              <Route index element={
                  <Home
                    category={category}
                    loadCategory={loadCategory}
                    list={list}
                    isFiltering={isFiltering}
                    filtered={filtered}
                  />}/>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/confirm" element={<Confirm />} />
            </Route>
          </Routes>
        </UserProfileContextProvider>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
