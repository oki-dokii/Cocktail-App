CocktailDB Random Drink App
===========================
This is a fun Node.js + Express web application that fetches a random cocktail using the
CocktailDB API and displays its name, ingredients, instructions, and image. Users can
click a button to generate a new random cocktail recipe each time.


### Features

--------
- Welcome screen before any cocktail is shown
- Fetches random cocktail from CocktailDB API
- Displays cocktail image, ingredients, and instructions
- Styled with CSS for a club-themed vibe
- Button to generate a new cocktail
- Built with Express, Axios, and EJS

### Folder Structure
Folder Structure
----------------
```
project-folder/
├── public/
│   └── styles.css
├── views/
│   └── index.ejs
├── index.js
├── package.json
└── README.md
```

Getting Started
---------------
1. Clone the Repository
 git clone https://github.com/oki-dokii/Cocktail-App.git
 cd Cocktail-App
2. Install Dependencies
 npm install
3. Start the Server
 If you have nodemon installed:
 nodemon index.js
 Or use regular Node:
 node index.js
Then open your browser and go to:
http://localhost:3000

Tech Stack
----------
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Axios
- HTML/CSS

How It Works
------------
- On the home page, a welcome message is shown.
- When the "Get Random Cocktail" button is clicked, the server makes a request to the
CocktailDB API.
- The cocktail details are passed to the EJS template and rendered.
- You can click the button again to fetch a new one.

Acknowledgements
----------------
- TheCocktailDB for the open API
- Inspired by Angela Yu's web dev bootcamp

License
-------
This project is for educational purposes. Feel free to modify and reuse!
