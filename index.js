const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/routes');
const errorHandler = require('./middleware/error');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

function start() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

start();