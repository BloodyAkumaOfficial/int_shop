const express = require('express');
require('dotenv').config();
const sequelize = require('./db');

const PORT = process.env.PORT || 6000;

const app = express();

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
