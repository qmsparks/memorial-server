const express = require('express');

const db = require('./models')

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))