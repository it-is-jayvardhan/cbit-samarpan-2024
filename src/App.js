import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from "./components/home";
import Registration from './components/registration';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        </Routes>
    </div>
  );
}

export default App;
//  {/* <Link to={`/${page}`}>{page}</Link> */}