
import './App.css';
import NavBar from './components/NavBar';
import PreNav from './components/PreNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import HotAccessories from './components/HotAccessories';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptios from "./components/NavOptios";


function App() {

  console.log(data.footer.contactUs);
  return (
    <>
      <BrowserRouter>
        <PreNav />
        <NavBar />
        <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text={"STAR PRODUCTS"} />
        <StarProducts starproducts={data.starProduct} />
        <Heading text={"HOT ACCESSORIES"} />
        <HotAccessoriesMenu />

        <Routes >
          <Route path="/">
            <Route index element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
            <Route exact path='/smartdevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
            <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
            <Route exact path='/lifestyle' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
            <Route exact path='/mobile' element={<HotAccessories mobile={data.hotAccessories.mobileAccessories} mobileCover={data.hotAccessoriesCover.mobileAccessories} />} />
          </Route>
        </Routes>
        <Heading text={"PRODUCT REVIEWS"} />
        <ProductReviews products={data.productReviews} />

        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />

        <Heading text="IN THE PRESS" />
        <Banner banner={data.banner.end} />
        <Footer footer={data.footer} />

      </BrowserRouter>
    </>


  );
}

export default App;
