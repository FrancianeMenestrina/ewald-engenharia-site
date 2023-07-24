import React from "react";
import "./styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1 className="flex justify-center mt-20 text-8xl flex-1">
        Ewald Engenharia
      </h1>
      <Footer />
    </div>
  );
};

export default Index;
