
import './App.css';
import Banner from './Components/Banner/Banner';
import { TshirtGrid } from './Components/Card/TshirtGrid';
import Bannertwo from './Components/Bannertwo/Bannertwo';
import Button from './Components/Button/Button';
import Categoriesbanner from './Components/Categoriesbanner/Categoriesbanner';
import Categorieslist from './Components/Categorieslist/Categorieslist';
import Contactus from './Components/Contactus/Contactus';
import Hurryup from './Components/Hurryup/Hurryup';
import Navbar from './Components/Navbar/Navbar';
import Stylishtees from './Components/Stylishtees/Stylishtees';

function App() {
  return (
   <>
   <Contactus/>
   <Navbar/>
   <Banner/>
   <Categorieslist/>
   <TshirtGrid/>
   <Categoriesbanner/>

   <Button/>

   <Bannertwo/>
   <Stylishtees/>
   <Hurryup/>
   
   </>
  );


}

export default App;
