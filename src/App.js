import './App.css';
import Blog from './components/Blog';
import DealsOfDay from './components/DealsOfDay';
import Footer from './components/Footer.js';
import LatestCollection from './components/LatestCollection';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import NewBrand from './components/NewBrand';
import NewCollection from './components/NewCollection';
import Productcart from './components/Productcart';
import Slideshow from './components/Slideshow';
import Testimonial from './components/Testimonial';
function App() {
  return (
    <div className="App">
      <NavBar2/>
      <NavBar/>
      <Slideshow/>
      <Productcart/>
      {/* <NewBrand/> */}
      <LatestCollection/>
      <Testimonial/>
      <DealsOfDay/>
      <Blog/>
      <NewCollection/>
      <Footer/>
    </div>
  );
}

export default App;
