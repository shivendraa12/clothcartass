
import './App.css';
import Banner from './Components/Banner/Banner';
import { TshirtGrid } from './Components/Card/TshirtGrid';
import Categorieslist from './Components/Categorieslist/Categorieslist';
import Contactus from './Components/Contactus/Contactus';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
   <>
   <Contactus/>
   <Navbar/>
   <Banner/>
   <Categorieslist/>
   <TshirtGrid/>
   
   </>
  );


}

export default App;
