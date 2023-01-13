import React, { useState } from "react";
import Container from "./componets/Container";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import "./style/Style.css";

import { useFetchImages } from "../src/hooks/useFetchImages";



const App = () => {

  const [images, loading, handleSubmit, escrito, handleFondo,color,fondo] = useFetchImages();

  
  return (
    <div className={color}>
      <Header/>
      <button className={fondo ? "boton botonNegro" : "boton botonBlanco" } onClick={handleFondo}></button>
      <Container fondo={fondo}/>
      <Footer />
      

    </div>
  );
};

export default App;
