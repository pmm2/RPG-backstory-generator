#!/bin/bash

# Prompt for the OpenAI key
read -p "Enter the OpenAI key: " OPENAI_KEY

# Open the first terminal and run commands for frontend
gnome-terminal --tab --title="Frontend" --working-directory="$PWD/frontend/RPG-backstory-generator/" \
    -- bash -c 'npm install && npm start; exec bash' &

# Open the second terminal and run commands for backend
gnome-terminal --tab --title="Backend" --working-directory="$PWD/backend/" \
    -- bash -c "export OPENAI_KEY='$OPENAI_KEY'; uvicorn app:app; exec bash" &
