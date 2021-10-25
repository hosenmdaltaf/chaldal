
import './App.css';
import Category from './Category';
import Header from './Header';
import Orderslider from './Orderslider';
import Specialofferslide from './Specialofferslide';
import Whypepole from './Whypepole';


function App() {
  return (
    <div className="App">
     <Header/>
     <Category/>
     <Orderslider/>
     <Specialofferslide/>
     <Whypepole/>
    </div>
  );
}

export default App;
