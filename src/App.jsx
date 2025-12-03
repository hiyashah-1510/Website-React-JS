import React from "react";
import Header from "./components/header";
import ControlledCarousel from "./components/hero";
import ProductSection from "./components/about";
import withProducts from "./components/withProduct";
import FeaturedProducts from "./components/featuredProduct";
import { productsData } from "./components/productData";
import Offer from "./components/Offer";
import OurProducts from "./components/ourProducts";
import withOurProducts from "./components/withOurProduct";
import Testimonial from "./components/testimonial";
import ProductList from "./components/productList";
import Banner from "./components/banner2";
import Footer from "./components/footer";

const FeaturedProductsWithData = withProducts(FeaturedProducts, productsData);
const ProductsWithData = withOurProducts(OurProducts);

function App() {
  return (
    <>
      <Header />
      <ControlledCarousel />
      <ProductSection />
      <FeaturedProductsWithData />
      <Offer />
      <ProductsWithData />
      <Testimonial />
      <ProductList/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default App;
