import React from "react";
import "./styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Clientes from "../components/Clientes";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <WhatsAppIcon />
      <Clientes />
      <Servicos />
      <Footer />
    </div>
  );
};

export default Index;
