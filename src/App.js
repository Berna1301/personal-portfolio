// App.js
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton"; // Importación del nuevo botón de WhatsApp

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <WhatsAppButton /> {/* Agrega el botón aquí */}
      <Footer />
    </div>
  );
}

export default App;
