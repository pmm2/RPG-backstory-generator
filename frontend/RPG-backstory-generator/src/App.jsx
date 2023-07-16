import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CategoryForm from "./form";

const app = () => {
  return (
    <div className="div-page">
      <Container className="page-title">
        <h3 className="mb-2">Seja bem vindo ao RPG Backstory Generator</h3>
        <p>Escolha as características do seu personagem.</p>
      </Container>
      <Container>
        <CategoryForm></CategoryForm>
      </Container>
    </div>
  );
};

export default app;
