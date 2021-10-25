
import './App.css';
import Appsadd from './Appsadd';
import Category from './Category';
import Header from './Header';
import Orderslider from './Orderslider';
import Specialofferslide from './Specialofferslide';
import Support from './Support';
import Whypepole from './Whypepole';


function App() {
  return (
    <div className="App">
     <Header/>
     <Category/>
     <Orderslider/>
     <Specialofferslide/>
     <Whypepole/>
     <Support/>
     <Appsadd/>
    </div>
  );
}

export default App;
