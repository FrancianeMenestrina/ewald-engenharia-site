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
      {/* <head>
        <script>
          (function(w,d,s,l,i){(w[l] = w[l] || [])}w[l].push({"gtm.start"}
          new Date().getTime(),event:'gtm.js');var
          f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          )(window,document,'script','dataLayer','GTM-N8R84FSB');
        </script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8R84FSB"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript> */}

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
      {/* </body> */}
    </div>
  );
};

export default Index;
