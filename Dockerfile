FROM node:22

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des outils globaux et dépendances
RUN npm install -g sirv-cli && npm install

# Copie du code source
COPY . .

# Build de l'application Astro
RUN npm run build

# Exposition du port Dokploy standard
EXPOSE 3000

# Démarrage du serveur statique
CMD ["sirv", "dist", "--port", "3000", "--host", "0.0.0.0", "--cors"]
