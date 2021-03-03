const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const getPlaceholder = require('./lib/getplaceholder');

const app = express();

app.engine('hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs',
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    let data = await getPlaceholder();
    console.log(data);
    res.render('index', {data});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});