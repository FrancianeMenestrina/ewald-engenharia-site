import React from "react";
import "./styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="flex items-center flex-1">
        <h1 className="flex justify-center mt-20 text-8xl flex-1 ">
          Ewald Engenharia
        </h1>
      </div>
      <WhatsAppIcon />
      <Footer />
    </div>
  );
};

export default Index;
