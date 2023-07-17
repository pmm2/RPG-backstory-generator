import React from 'react';
import AddCharacterButton from './AddCharacterButton';
import './CharacterList.css';
import { Card, Row, Col,Container } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const navigate  = useNavigate();

  const handleCharacterClick = (character) => {
    navigate(`/person/${character.name}`);
  };

  const generateGrid = () => {
    const grid = [];
    let index = 0;

    for (let row = 0; row < 8; row++) {
      const cols = [];
      for (let col = 0; col < 8; col++) {
        if (index < characters.length) {
          const character = characters[index];
          cols.push(
            <Col xs={12} md={6} lg={4} xl={3} key={character.name} className="character-list-col">
              <Card className="character-card" onClick={() => handleCharacterClick(character)}>
                <Card.Img variant="top" src={character.image} alt={character.name} className="character-image" />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>{character.story}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        } else {
          cols.push(
            <Col xs={12} md={6} lg={4} xl={3} key={`empty-${row}-${col}`} className="character-list-col empty-cell" />
          );
        }
        index++;
      }
      grid.push(<Row key={row}>{cols}</Row>);
    }

    return grid;
  };

  return (
    <Container fluid className="character-list-container">
      {generateGrid()}
      <AddCharacterButton />
    </Container>
  );
};

export default CharacterList;
