import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from 'axios';
const CategoryForm = () => {
    const [formData, setFormData] = useState({
        height: "",
        eyes: "",
        hair_color: "",
        hair_length: "",
        hair_type: "",
        body_type: "",
        skin_tone: "",
        facial_features: "",
        clothing_style: "",
        weapon_preference: "",
        race: "",
        character_class: "",
        background: "",
    });
    const [toggle, setToggle] = useState(true)
    const [history, setHistory] = useState("")
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const instance = axios.create({
        baseURL: 'http://localhost:8000'
    });

    const fetchCharacther = async () => {
        try {
            const response = await instance.get('/character', {
                params: formData,
            });
            console.log(response);

            setHistory(response.data.content.split(':'));
            setToggle(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetchCharacther();

    };

    const categories = [
        {
            name: "height",
            label: "Height",
            options: ["Short", "Average", "Tall", "Very tall"],
        },
        {
            name: "eyes",
            label: "Eyes",
            options: ["Blue", "Green", "Brown", "Gray", "Hazel"],
        },
        {
            name: "hair_color",
            label: "Color of hair",
            options: ["Black", "Brown", "Blonde", "Red", "Gray", "White"],
        },
        {
            name: "hair_length",
            label: "Length of hair",
            options: ["Bald", "Short", "Medium", "Long"],
        },
        {
            name: "hair_type",
            label: "Type of hair",
            options: ["Straight", "Wavy", "Curly", "Braided", "Dreadlocks"],
        },
        {
            name: "body_type",
            label: "Body type",
            options: ["Slim", "Athletic", "Muscular", "Curvy", "Stout", "Heavyset"],
        },
        {
            name: "skin_tone",
            label: "Skin tone",
            options: ["Fair", "Light", "Medium", "Olive", "Dark", "Ebony"],
        },
        {
            name: "facial_features",
            label: "Facial features",
            options: ["Clean-shaven", "Beard", "Mustache", "Sideburns", "Scars"],
        },
        {
            name: "clothing_style",
            label: "Clothing style",
            options: [
                "Elegant",
                "Casual",
                "Practical/Functional",
                "Exotic",
                "Formal",
                "Vintage",
            ],
        },
        {
            name: "weapon_preference",
            label: "Weapon preference",
            options: ["Sword", "Bow", "Staff", "Dagger", "Hammer", "Shield"],
        },
        {
            name: "race",
            label: "Race",
            options: [
                "Human",
                "Elf",
                "Dwarf",
                "Halfling",
                "Tiefling",
                "Dragonborn",
                "Half-elf",
                "Half-orc",
                "Gnome",
            ],
        },
        {
            name: "character_class",
            label: "Class",
            options: [
                "Fighter",
                "Wizard",
                "Rogue",
                "Cleric",
                "Bard",
                "Paladin",
                "Ranger",
                "Sorcerer",
                "Warlock",
                "Monk",
            ],
        },
        {
            name: "background",
            label: "Background",
            options: [
                "Noble",
                "Outlander",
                "Criminal",
                "Acolyte",
                "Sage",
                "Soldier",
                "Folk Hero",
                "Urchin",
                "Entertainer",
                "Guild Artisan",
            ],
        },
    ];

    return (
        <>

            {toggle && <Form>
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
                    Submit
                </Button>
            </Form>}
            {!toggle &&
                history.map((string, index) => (
                    <p key={index}>{string.trim()}</p>
                ))}
        </>
    );
};

export default CategoryForm;
