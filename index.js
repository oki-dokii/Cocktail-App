import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const shouldFetch = req.query.fetch === 'true';

    if (shouldFetch) {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const drink = response.data.drinks[0];

      const ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];
        if (ingredient && measure) {
          ingredients.push({ ingredient, measure });
        }
      }

      res.render('index', { drink, ingredients });
    } else {
      // 🚨 Show welcome screen if not fetching
      res.render('index', { drink: null, ingredients: [] });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
