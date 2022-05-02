import React from "react";
import './Home.css';
import Banner from "../Banner/Banner";
import OurWareHouse from "../OurWareHouse/OurWareHouse";
import Services from "../Services/Services";
import OurTrustedPartner from "../OurTrustedPartner/OurTrustedPartner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>      
      <OurWareHouse></OurWareHouse>
      <OurTrustedPartner></OurTrustedPartner>
      
    </div>
  );
};

export default Home;
