const express = require('express');
const mongoose = require('mongoose');
const app = express();
const index = require("./routers/index");
const cors = require("cors");
const helmet = require("helmet");

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/QuestionDB')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

app.use(cors());
app.use(helmet());
app.use("/", index);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});