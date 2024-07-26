import './App.css';
import Header from "./Components/Header";
import Testing from "./Components/Testing";
import Home from "./Components/Home";
import Footer from './Components/Footer'
import Search from './Components/Search'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Testing />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;