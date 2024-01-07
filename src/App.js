import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './page/Index';
import Layout from './page/Layout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Index/>}/>
          </Route>



          {/* <Route path='/' element={<ListData/>}/>
          <Route path='/ajouter' element={<AddEditProjet/>}/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
