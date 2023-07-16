import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus  } from '@fortawesome/free-solid-svg-icons';
import "./AddCharacterButton.css"

const AddCharacterButton = () => {
  return (
    <div className="add-character-button">
      <Link to="/Personagem">
        <FontAwesomeIcon icon={faPlus } className="add-icon"   />
      </Link>
    </div>
  );
};

export default AddCharacterButton;
