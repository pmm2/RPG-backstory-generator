import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const CharacterDetails = ({ characters }) => {
  const { characterName } = useParams();

  // Filtrar a lista de personagens com base no nome
  const filteredCharacters = characters.filter(character => character.name === characterName);

  if (filteredCharacters.length === 0) {
    return <div>Personagem não encontrado.</div>;
  }

  const character = filteredCharacters[0];

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Image src={character.image} alt={character.name} fluid />
        </Col>
        <Col md={8}>
          <h2>{character.name}</h2>
          <p>{character.story}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterDetails;
