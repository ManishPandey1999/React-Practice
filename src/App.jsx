import './App.css';
import Header from "./Components/Header";
import Testing from "./Components/Testing";
import Home from "./Components/Home";
import ConditionalFooter from './Components/Conditionalfooter'
import Search from './Components/Search'
import Offers from './Components/Offers'
import Help from './Components/Help'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Testing />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
      </Routes>      
      <ConditionalFooter />       
    </Router>
  );
}

export default App;