
import Appsadd from './Appsadd';
import Category from './Category';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import Orderslider from './Orderslider';
import Specialofferslide from './Specialofferslide';
import Support from './Support';
import Total from './Total';
import Whypepole from './Whypepole';
import Navbar from './Navbar'
import Clientsay from './Clientsay';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
             
     <Navbar/>
     <Header/>
     <Category/>
     <Orderslider/>
     {/* <Specialofferslide/> */}
     <Whypepole/>
     <Clientsay/>
     <Support/>
     <Appsadd/>
     <Total/>
     <Modal/>
     <Footer/>
    </div>
  );
}

export default App;
