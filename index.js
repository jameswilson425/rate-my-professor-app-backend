const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const reviewsDb = require('./reviews-queries');


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/reviews', reviewsDb.getReviews);
app.get('/reviews/:id', reviewsDb.getReviewById);
app.post('/reviews', reviewsDb.createReview);
app.put('/reviews/:id', reviewsDb.updateReview);
app.delete('/reviews/:id', reviewsDb.deleteReview);


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});