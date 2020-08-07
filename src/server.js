const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Express body parsers
app.use(express.json()); // to recognize the incoming Request Object as a JSON Object
app.use(express.urlencoded( //  to recognize the incoming Request Object as strings or arrays
  {extended: false}));  //If extended is false, you can not post "nested object"

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});   