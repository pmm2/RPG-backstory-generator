import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import categories from './Files/Category.json';

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    height: '',
    eyes: '',
    hair_color: '',
    hair_length: '',
    hair_type: '',
    body_type: '',
    skin_tone: '',
    facial_features: '',
    clothing_style: '',
    weapon_preference: '',
    race: '',
    character_class: '',
    background: '',
  });
  const [toggle, setToggle] = useState(true);
  const [history, setHistory] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const instance = axios.create({
    baseURL: 'http://localhost:8000',
  });

  const fetchCharacter = async () => {
    try {
      const response = await instance.get('/character', {
        params: formData,
      });
      console.log(response);

      setHistory(response.data.content);
      setToggle(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetchCharacter();
  };

  return (
    <div className="rpg-form-container">
      <h1 className="rpg-form-title">Create Your Character</h1>
      <div className="rpg-form-content">
        {toggle && (
          <Form>
            {categories.map((category) => (
              <Form.Group key={category.name} className="mb-3">
                <Form.Label>{category.label}:</Form.Label>
                <div>
                  {category.options.map((option) => (
                    <Form.Check
                      key={option}
                      inline
                      required
                      type="radio"
                      name={category.name}
                      label={option}
                      value={option}
                      onChange={handleInputChange}
                    />
                  ))}
                </div>
              </Form.Group>
            ))}
            <Button type="submit" onClick={handleSubmit}>
              Start Your Adventure
            </Button>
          </Form>
        )}
        {!toggle && <p>{history}</p>}
      </div>
    </div>
  );
};

export default CategoryForm;
