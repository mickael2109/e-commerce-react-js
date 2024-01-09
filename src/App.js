import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './Routes/PublicRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/*' element={<PublicRoute/>}/>
      </Routes>   
    </BrowserRouter>
    
  );
}

export default App;
