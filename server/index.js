const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path')
const router = require('./routes/index');
const errorHandler = require('./middlewere/ErrorHandlingMiddlewere');

const PORT = process.env.PORT || 6000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);

// errors handler
app.use(errorHandler);

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
