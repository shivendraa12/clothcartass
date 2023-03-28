import React,{Suspense,lazy} from 'react';
import './App.css';
// import Banner from './Components/Banner/Banner';
// import  TshirtGrid  from './Components/Card/TshirtGrid';
// import Bannertwo from './Components/Bannertwo/Bannertwo';
// import Categoriesbanner from './Components/Categoriesbanner/Categoriesbanner';
// import Categorieslist from './Components/Categorieslist/Categorieslist';
// import Contactus from './Components/Contactus/Contactus';
// import Hurryup from './Components/Hurryup/Hurryup';
// import Navbar from './Components/Navbar/Navbar';
// import Stylishtees from './Components/Stylishtees/Stylishtees';
// import SecondCardGrid from './Components/2ndCard/2ndCardGrid';

// import Logos from './Components/Logos/Logos';
// import Searchbar from './Components/Searchbar/Searchbar';
// import Footer from './Components/Footer/Footer';
// import Lastfooter from './Components/Lastfooter/Lastfooter';




const Contactus = lazy(()=>import('./Components/Contactus/Contactus'))
const Navbar = lazy(()=>import('./Components/Navbar/Navbar'))
const Banner = lazy(()=>import('./Components/Banner/Banner'))
const Categorieslist = lazy(()=>import('./Components/Categorieslist/Categorieslist'))
const Categoriesbanner = lazy(()=>import('./Components/Categoriesbanner/Categoriesbanner'))
const TshirtGrid = lazy(()=>import('./Components/Card/TshirtGrid'))
const Bannertwo = lazy(()=>import('./Components/Bannertwo/Bannertwo'))
const SecondCardGrid = lazy(()=>import('./Components/2ndCard/2ndCardGrid'))
const Stylishtees = lazy(()=>import('./Components/Stylishtees/Stylishtees'))
const Hurryup = lazy(()=>import('./Components/Hurryup/Hurryup'))
const Logos = lazy(()=>import('./Components/Logos/Logos'))
const Searchbar = lazy(()=>import('./Components/Searchbar/Searchbar'))
const Footer = lazy(()=>import('./Components/Footer/Footer'))
const Lastfooter = lazy(()=>import('./Components/Lastfooter/Lastfooter'))



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


function App() {
  return (
   
   <Suspense fallback={<div>please wait...... Page is loading</div>}>
   <Contactus/>
   <Navbar/>
   <Banner/>
   <Categorieslist/>
   <Categoriesbanner/>

   <TshirtGrid tshirtData={tshirtData} tShirtGridParent={"Trending T-Shirts"}/>
   <TshirtGrid tshirtData={tshirtData2} tShirtGridParent={"Featured Products"}/>
   <Bannertwo/>
   <TshirtGrid tshirtData={tshirtData2} tShirtGridParent={"New Products"}/>
   <TshirtGrid tshirtData={tshirtData2} tShirtGridParent={"Best Selling Products"}/>
   <SecondCardGrid/>
   <Stylishtees/>
   <Hurryup/>
   <Logos/>
   <Searchbar/>
   <Footer/>
   <Lastfooter/>
   </Suspense>
  );


}

export default App;
