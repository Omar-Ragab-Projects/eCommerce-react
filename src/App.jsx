import Brands from "./components/brands/Brands.jsx";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import News from "./components/news/News.jsx";
import Products from "./components/products/Products.jsx";
import SalesBanner from "./components/salesBanner/SalesBanner";
import salesBannerData from "./data/salesBannerData";
import Footer from "./components/footer/Footer.jsx";

function App() {
  // useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <SalesBanner data={salesBannerData[0]} />
      <Products />
      <SalesBanner data={salesBannerData[1]} />
      <News />
      <Brands />
      <Footer />
    </>
  );
}

export default App;
