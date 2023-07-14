from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from rpg_generator import generate_rpg_background

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def process_character(character):
    generated_background = await generate_rpg_background(character)
    return generated_background

@app.get("/character")
async def get_character(
    height: str,
    eyes: str,
    hair_color: str,
    hair_length: str,
    hair_type: str,
    body_type: str,
    skin_tone: str,
    facial_features: str,
    clothing_style: str,
    weapon_preference: str,
    race: str,
    character_class: str,
    background: str
):
    character = {
        "height": height,
        "eyes": eyes,
        "hair_color": hair_color,
        "hair_length": hair_length,
        "hair_type": hair_type,
        "body_type": body_type,
        "skin_tone": skin_tone,
        "facial_features": facial_features,
        "clothing_style": clothing_style,
        "weapon_preference": weapon_preference,
        "race": race,
        "character_class": character_class,
        "background": background
    }
    background_story = await process_character(character)
    return background_story
