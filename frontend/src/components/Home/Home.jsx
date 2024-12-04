import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Slider from "../Slider/Slider";
import BlogSection from "../BlogSection/BlogSection";
import CustomSection from "../CustomSection/CustomSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Slider />
      <BlogSection />
      <CustomSection />
    </>
  );
};

export default Home;
