import React from "react";
import Layout from "../../Components/Layout/Layout";
import CarouselSlide from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
//import Pro from "../../Components/Pro/Pro";

function Home() {
    return (
        <Layout>
            <CarouselSlide />
            <Category />

            <Product />
        </Layout>
    );
}

export default Home;
