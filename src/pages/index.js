import React from "react";
import "./styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div>
      <Header />
      <h1 className="flex justify-center mt-20 text-8xl">Ewald Engenharia</h1>
      <Footer />
    </div>
  );
};

export default Index;
