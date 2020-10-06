import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home-row">
        <Product
          id="1"
          title="Auriga Sheesham Wood Bed"
          rate={5}
          price={500}
          img="/images/Bed.jpg"
        />
        <Product
          id="2"
          title="Egg Beater"
          rate={3}
          price={40}
          img="/images/cooking.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="3"
          title="Laptop accessories"
          rate={4}
          price={380}
          img="/images/laptop.jpg"
        />
        <Product
          id="4"
          title="Clothing"
          rate={4}
          price={78}
          img="/images/fashion.jpg"
        />
        <Product
          id="5"
          title="Watch"
          rate={4}
          price={500}
          img="/images/watch.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="6"
          title="Chocolate"
          rate={3}
          price={100}
          img="/images/choco.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
