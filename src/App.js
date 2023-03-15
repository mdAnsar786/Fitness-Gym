import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Shop from './Component/Shop/Shop';
import Footer from './Component/Footer/Footer';
import Service from './Component/Service/Service';
import Traning from './Component/Traning/Traning';
import Blog from './Component/Blog/Blog';
import Testimonal from './Component/Testimonal/Testimonal';
import Swipable from './Component/Swipable/Swipable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import JoinForm from './Component/JoinFrom/JoinForm';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/joinForm" element={<JoinForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
