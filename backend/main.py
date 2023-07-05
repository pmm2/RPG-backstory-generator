from fastapi import FastAPI

app = FastAPI()
def process_character(character):
    print(f"Processing character: {character}")
    # Call  proccess_caracther from the chatgpt python file here
  



@app.get("/character")
def get_character(
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
    process_character(character)  
    
    return character  
