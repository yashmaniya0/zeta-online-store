import React from 'react'
import Promo from '../components/Promo'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import ProductSlider from '../components/ProductSlider'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import {discountProducts, latestProducts, trendingProducts} from "../data";
import Footer from '../components/Footer'


export default function home() {
  return (
    <React.Fragment>
        <Promo />
        <Navbar/>
        <Slider />
        <Categories />
        <ProductSlider title="Top & Trending" products={trendingProducts}/>
        <ProductSlider title="Latest Drop" products={latestProducts}/>
        <ProductSlider title="Upto 50% Discount" products={discountProducts}/>
        <Newsletter />
        <Footer />
    </React.Fragment>
  )
}
