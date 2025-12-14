# JustPics

Application web de gestion de produits/visuels : une interface React moderne (Chakra UI, Vite, Zustand) coupl�e � une API REST Express/MongoDB (Mongoose).

## Sommaire
- Aper�u
- Architecture & Stack
- Pr�requis
- Installation
- Configuration
- D�marrage
- API REST
- Structure du projet
- Licence

## Aper�u
JustPics permet de cr�er, lister, mettre � jour et supprimer des produits (nom, prix, image, description) via une API Node/Express reli�e � MongoDB, avec une interface responsive en React/Chakra UI.

## Architecture & Stack
- Front-end : React 19, Vite, Chakra UI, React Router, Zustand, React Icons.
- Back-end : Node.js, Express, Mongoose (MongoDB Atlas ou instance locale).
- Outils : ESLint, Vite build/preview, dotenv.

## Pr�requis
- Node.js 18+ et npm.
- Acc�s � une base MongoDB (locale ou h�berg�e).

## Installation
1. Cloner le d�p�t :
   ```bash
   git clone <repo> && cd JustPics
   ```
2. D�pendances API :
   ```bash
   cd server
   npm install
   ```
3. D�pendances Front :
   ```bash
   cd ../JustPicsClient
   npm install
   ```

## Structure du projet
```
JustPics/
+- JustPicsClient/        # Front-end React (Vite, Chakra UI)
�  +- src/
�  �  +- components/      # Navbar, UI
�  �  +- pages/           # Home, Create
�  �  +- store/           # Zustand store (produits)
�  +- package.json
+- server/                # API Express/Mongoose
�  +- src/
�  �  +- config/          # Connexion MongoDB
�  �  +- controllers/     # Logique CRUD
�  �  +- models/          # Sch�mas Mongoose
�  �  +- routes/          # Routes REST
�  +- package.json
+- LICENSE                # PolyForm Noncommercial 1.0.0
+- README.md
```

## Licence
PolyForm Noncommercial 1.0.0 � usage non commercial uniquement. Veuillez consulter `LICENSE` pour les d�tails.
