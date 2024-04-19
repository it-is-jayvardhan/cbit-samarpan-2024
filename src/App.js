import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { Suspense, lazy } from 'react';
import Loading from './components/loading';
const Home=lazy(()=>import('./components/home'));
const Registration=lazy(()=>import('./components/registration'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        </Routes>
        </Suspense>
    </div>
  );
}

export default App;
//  {/* <Link to={`/${page}`}>{page}</Link> */}