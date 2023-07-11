import httpx
import requests
import json
import os

openai_key = os.getenv('OPENAI_KEY')
async def generate_rpg_background(character):
    # Defina suas credenciais da API do OpenAI
    api_key = openai_key
    api_url = 'https://api.openai.com/v1/chat/completions'
    id_modelo = 'gpt-3.5-turbo'

    # Construa o prompt com base nas características do personagem
    prompt = f"Height: {character['height']}\nEyes: {character['eyes']}\nHair Color: {character['hair_color']}\nHair Length: {character['hair_length']}\nHair Type: {character['hair_type']}\nBody Type: {character['body_type']}\nSkin Tone: {character['skin_tone']}\nFacial Features: {character['facial_features']}\nClothing Style: {character['clothing_style']}\nWeapon Preference: {character['weapon_preference']}\nRace: {character['race']}\nCharacter Class: {character['character_class']}\nBackground: {character['background']}"

    # Faça uma solicitação POST para a API do ChatGPT
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}'
    }
    data = {
        'prompt': prompt,
        'max_tokens': 100,
        'temperature': 0.7
    }

    body_message = {
        "model": id_modelo,
        "messages": [{"role": "user", "content": prompt}]
    }
    body_message = json.dumps(body_message)

    req = requests.post(api_url, headers=headers, data=body_message)
    print(req.json()['choices'][0]['message'])
    return req.json()['choices'][0]['message']
