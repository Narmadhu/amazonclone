import React from "react";
import "./Home.css";
import Product from "../product/Product";
import ProductData from "../../data/product.json";

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home-row">
        {ProductData.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            rating={product.rating}
            rate={product.rate}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
