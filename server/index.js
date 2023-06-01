const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models')
const cors = require('cors');

const PORT = process.env.PORT || 6000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'I`ts work!!'});
})

const start = async () => {
      try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server was started on port: ${PORT}`));
    } catch (e) {
        console.log(e.message);
    }
}

start().catch(e => console.log(e.message));
