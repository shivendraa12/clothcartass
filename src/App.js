
import './App.css';
import Banner from './Components/Banner/Banner';
import  TshirtGrid  from './Components/Card/TshirtGrid';
import Bannertwo from './Components/Bannertwo/Bannertwo';
import Categoriesbanner from './Components/Categoriesbanner/Categoriesbanner';
import Categorieslist from './Components/Categorieslist/Categorieslist';
import Contactus from './Components/Contactus/Contactus';
import Hurryup from './Components/Hurryup/Hurryup';
import Navbar from './Components/Navbar/Navbar';
import Stylishtees from './Components/Stylishtees/Stylishtees';
import SecondCardGrid from './Components/2ndCard/2ndCardGrid';




const tshirtData = [
  {
    tshirtImage: "Rectangle 3",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 4",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 5",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 6",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 3",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 4",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 5",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 6",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
];
const tshirtData2 = [
  {
    tshirtImage: "Rectangle 3",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 4",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 5",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  {
    tshirtImage: "Rectangle 6",
    tshirtBrandName: "Men Henley Neck ",
    tshirtStyle: "Full Sleeve Red Wine",
    tshirtPrice: "₹399",
    tshirtCutOffPrice: "₹1299",
  },
  
];
import Logos from './Components/Logos/Logos';
import Searchbar from './Components/Searchbar/Searchbar';
import Footer from './Components/Footer/Footer';
import Lastfooter from './Components/Lastfooter/Lastfooter';

function App() {
  return (
   <>
   <Contactus/>
   <Navbar/>
   <Banner/>
   <Categorieslist/>
   <TshirtGrid tshirtData={tshirtData} tShirtGridParent={"Trending T-Shirts"}/>
   <TshirtGrid tshirtData={tshirtData2} tShirtGridParent={"Featured Products"}/>
   <TshirtGrid tshirtData={tshirtData2} tShirtGridParent={"New Products"}/>
   <TshirtGrid tshirtData={tshirtData2} tShirtGridParent={"Best Selling Products"}/>
   <SecondCardGrid/>
   <Categoriesbanner/>
   <Bannertwo/>
   <Stylishtees/>
   <Hurryup/>
   <Logos/>
   <Searchbar/>
   <Footer/>
   <Lastfooter/>
   </>
  );


}

export default App;
