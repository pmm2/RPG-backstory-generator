import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Menu from './Menu'
import CategoryForm from "./form";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./Home";
import charactersData from './Files/Personagens.json';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

const app = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}   />
        <Route path="/Personagem"  element={ <Container> <CategoryForm /> </Container>} />
        <Route path="/Personagens"  element={<CharacterList characters={charactersData} />} />
        <Route path="/person/:characterName" element={<CharacterDetails characters={charactersData} />} />
      </Routes>
    </Router>
  );
};

export default app;


