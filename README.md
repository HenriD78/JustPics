# JustPics

Application web de gestion de produits/visuels : une interface React moderne (Chakra UI, Vite, Zustand) couplée à une API REST Express/MongoDB (Mongoose).

## Sommaire
- Aperçu
- Architecture & Stack
- Prérequis
- Installation
- Configuration
- Démarrage
- API REST
- Structure du projet
- Licence

## Aperçu
JustPics permet de créer, lister, mettre à jour et supprimer des produits (nom, prix, image, description) via une API Node/Express reliée à MongoDB, avec une interface responsive en React/Chakra UI.

## Architecture & Stack
- Front-end : React 19, Vite, Chakra UI, React Router, Zustand, React Icons.
- Back-end : Node.js, Express, Mongoose (MongoDB Atlas ou instance locale).
- Outils : ESLint, Vite build/preview, dotenv.

## Prérequis
- Node.js 18+ et npm.
- Accès à une base MongoDB (locale ou hébergée).

## Installation
1. Cloner le dépôt :
   ```bash
   git clone <repo> && cd JustPics
   ```
2. Dépendances API :
   ```bash
   cd server
   npm install
   ```
3. Dépendances Front :
   ```bash
   cd ../JustPicsClient
   npm install
   ```

## Configuration
Dans `server/.env`, définir vos secrets (ne pas commiter) :
```env
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority
PORT=8080
```

## Démarrage
- API (port 8080 par défaut) :
  ```bash
  cd server
  node src/index.js    # ou nodemon si disponible
  ```
- Front (Vite, port 5173 par défaut) :
  ```bash
  cd JustPicsClient
  npm run dev
  ```
- Build front :
  ```bash
  npm run build
  ```
- Lint front :
  ```bash
  npm run lint
  ```

## API REST
Base URL : `http://localhost:8080/api/products`

- `GET /` — health check.
- `GET /api/products` — lister les produits.
- `POST /api/products` — créer un produit.
  ```json
  {
    "name": "Affiche JustPics",
    "price": 29.9,
    "image": "https://…/affiche.jpg",
    "description": "Edition limitée"
  }
  ```
- `PUT /api/products/:id` — mettre à jour un produit.
- `DELETE /api/products/:id` — supprimer un produit.

Réponses : `{ "success": true|false, "data"?: <ressource>, "message"?: <texte> }`.

## Structure du projet
```
JustPics/
+- JustPicsClient/        # Front-end React (Vite, Chakra UI)
¦  +- src/
¦  ¦  +- components/      # Navbar, UI
¦  ¦  +- pages/           # Home, Create
¦  ¦  +- store/           # Zustand store (produits)
¦  +- package.json
+- server/                # API Express/Mongoose
¦  +- src/
¦  ¦  +- config/          # Connexion MongoDB
¦  ¦  +- controllers/     # Logique CRUD
¦  ¦  +- models/          # Schémas Mongoose
¦  ¦  +- routes/          # Routes REST
¦  +- package.json
+- LICENSE                # PolyForm Noncommercial 1.0.0
+- README.md
```

## Licence
PolyForm Noncommercial 1.0.0 — usage non commercial uniquement. Veuillez consulter `LICENSE` pour les détails.
