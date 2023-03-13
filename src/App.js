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


function App() {
  return (
    <div className="App">
    <Header/>
    <Swipable/>
    <About/>
    <Shop/>
    <Service/>
    <Traning/>
    <Testimonal/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
