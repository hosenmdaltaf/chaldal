
import Appsadd from './Appsadd';
import Category from './Category';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import Orderslider from './Orderslider';
import Support from './Support';
import Total from './Total';
import Whypepole from './Whypepole';
import Navbar from './Navbar'
import Clientsay from './Clientsay';
import Advert from './Advert';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <div className="App">
             
     <Navbar/>
     <Modal/>
     <Header/>
     <Advert/>
     <Category/>
     <Orderslider/>
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
