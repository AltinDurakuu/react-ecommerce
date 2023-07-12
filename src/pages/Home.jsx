import React, { useEffect, useState } from 'react';
import HeroBanner from "../components/HeroBanner";
import DiscoverSection from "../components/DiscoverSection";
import ProductsSection from "../components/ProductsSection";
import axios from 'axios';
import SubscribeSection from '../components/SubscribeSection';

function Home(){
    const [mostSold, setMostSold] = useState([]);
    const [onSale, setOnSale] = useState([]);
    const [recentProducts, setRecentProducts] = useState([]);
  
    const fetchProducts = async (filter, limit) => {
      try {
        const response = await axios.get('http://localhost/Api/api.php', {
          params: {
            sort: filter,
            limit: limit
          }
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    };
  
    useEffect(() => {
      const fetchData = async () => {
        const mostSoldData = await fetchProducts('times_sold', 8);
        setMostSold(mostSoldData);
  
        const onSaleData = await fetchProducts('sale_percentage', 8);
        setOnSale(onSaleData);

        const recentData = await fetchProducts('added_time', 8);
        setRecentProducts(recentData);
      };
  
      fetchData();
    }, []);

    return (
        <main className="full-block">
            <HeroBanner />
            <DiscoverSection />
            <ProductsSection sectionTitle="Special offers" sectionPhrase="Exclusive Deals and Discounts" arrayOfProducts={onSale}/>
            <ProductsSection sectionTitle="Popular items" sectionPhrase="Trending products flying off the shelves" arrayOfProducts={mostSold}/>
            <ProductsSection sectionTitle="Recent releases" sectionPhrase="The most recent additions to our collection" arrayOfProducts={recentProducts}/>
            <SubscribeSection />
        </main>
    )
}

export default Home;