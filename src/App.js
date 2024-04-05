import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import WhyUsDetailed from './pages/why-us-detailed';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path='/why-us' element={<WhyUsDetailed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
