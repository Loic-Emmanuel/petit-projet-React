# 🌤️ Application Météo avec React

Une application météo moderne et réactive développée avec React, TypeScript et Vite. Cette application permet de consulter les conditions météorologiques actuelles pour n'importe quelle ville dans le monde.

## ✨ Fonctionnalités

- 🔍 Recherche de météo par ville
- 🌡️ Affichage de la température actuelle
- ☀️ Conditions météorologiques détaillées
- 💨 Vitesse du vent et humidité
- 🌍 Support multilingue (français par défaut)
- 📱 Design responsive

## 🚀 Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Une clé API OpenWeatherMap (gratuite)

## 🛠️ Installation

1. **Cloner le dépôt**
   ```bash
   git clone [URL_DU_DEPOT]
   cd react-weather-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Configurer la clé API**
   - Obtenez une clé API gratuite sur [OpenWeatherMap](https://openweathermap.org/api)
   - Créez un fichier `.env` à la racine du projet
   - Ajoutez votre clé API :
     ```
     VITE_OPENWEATHER_API_KEY=votre_cle_api_ici
     ```

4. **Lancer l'application en mode développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   L'application sera disponible à l'adresse [http://localhost:5173](http://localhost:5173)

## 🏗️ Structure du projet

```
src/
├── App.tsx           # Composant principal
├── App.css          # Styles principaux
├── main.tsx         # Point d'entrée de l'application
└── vite-env.d.ts    # Déclarations TypeScript
```

## 🛠 Technologies utilisées

- [React](https://reactjs.org/) - Bibliothèque JavaScript pour les interfaces utilisateur
- [TypeScript](https://www.typescriptlang.org/) - JavaScript typé
- [Vite](https://vitejs.dev/) - Outil de build et serveur de développement
- [OpenWeatherMap API](https://openweathermap.org/api) - Données météorologiques

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

## 🙏 Remerciements

- [OpenWeatherMap](https://openweathermap.org/) pour leur API météo gratuite
- [Vite](https://vitejs.dev/) pour l'outil de build ultra-rapide
- [React](https://reactjs.org/) pour la bibliothèque UI incroyable
