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
    prompt = f"I will give you a list o characteristics of a character. Create a backgorund history with it: Height: {character['height']}, Eyes: {character['eyes']}, Hair Color: {character['hair_color']}, Hair Length: {character['hair_length']}, Hair Type: {character['hair_type']}, Body Type: {character['body_type']}, Skin Tone: {character['skin_tone']}, Facial Features: {character['facial_features']}, Clothing Style: {character['clothing_style']}, Weapon Preference: {character['weapon_preference']}, Race: {character['race']}, Character Class: {character['character_class']}, Background: {character['background']}"
    prompt2 = f"Create a background history for a character that is {character['height']} tall, has {character['hair_color']}"
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

    try:
        req = requests.post(api_url, headers=headers, data=body_message)
        req.raise_for_status()
        data = req.json()
        choices = data.get('choices')
        if choices:
            message = choices[0].get('message')
            if message and 'content' in message:
                return message
        return "Failed to generate background story."
    except requests.exceptions.RequestException as e:
        return f"Error: {e}"
    except (KeyError, IndexError) as e:
        return "Invalid response from the API."

