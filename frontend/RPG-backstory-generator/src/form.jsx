import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from 'axios';
const CategoryForm = () => {
    const [formData, setFormData] = useState({
        height: "",
        eyes: "",
        hairColor: "",
        hairLength: "",
        hairType: "",
        bodyType: "",
        skinTone: "",
        facialFeatures: "",
        clothingStyle: "",
        weaponPreference: "",
        race: "",
        characterClass: "",
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

    const fetchCharacther = async () => {
        try {
            const response = await axios.get('/character', {
                params: formData,
            });

            setHistory(response.data);
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
            name: "hairColor",
            label: "Color of hair",
            options: ["Black", "Brown", "Blonde", "Red", "Gray", "White"],
        },
        {
            name: "hairLength",
            label: "Length of hair",
            options: ["Bald", "Short", "Medium", "Long"],
        },
        {
            name: "hairType",
            label: "Type of hair",
            options: ["Straight", "Wavy", "Curly", "Braided", "Dreadlocks"],
        },
        {
            name: "bodyType",
            label: "Body type",
            options: ["Slim", "Athletic", "Muscular", "Curvy", "Stout", "Heavyset"],
        },
        {
            name: "skinTone",
            label: "Skin tone",
            options: ["Fair", "Light", "Medium", "Olive", "Dark", "Ebony"],
        },
        {
            name: "facialFeatures",
            label: "Facial features",
            options: ["Clean-shaven", "Beard", "Mustache", "Sideburns", "Scars"],
        },
        {
            name: "clothingStyle",
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
            name: "weaponPreference",
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
            name: "characterClass",
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
                <h3>
                    {history}
                </h3>}
        </>
    );
};

export default CategoryForm;
