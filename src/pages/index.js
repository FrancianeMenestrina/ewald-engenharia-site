import React from "react";
import "./styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";
import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Clientes from "../components/Clientes";
import Seo from "../components/Seo";
import PerfilGui from "../components/PerfilGui";
import Faq from "../components/Faq";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen font-roboto">
      <Seo
        title="Ewald Engenharia"
        description="Ewald Engenharia - Segurança do Trabalho e Gestão Fabril"
      ></Seo>
      <WhatsAppIcon />
      <Header />
      <Hero />
      {/* <Clientes /> */}
      <Servicos />
      <PerfilGui />
      <Faq />
      <Footer />
    </div>
  );
};

export default Index;
