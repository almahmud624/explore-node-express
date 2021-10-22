const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const port = process.env.PORT || 4000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Janeman OMG rafaea Dear');
});

const users = [
    { id: 0, name: 'Manika', email: 'rabbi@gmail.com', phone: '234535626' },
    { id: 1, name: 'Rabbi', email: 'rabbi@gmail.com', phone: '234535626' },
    { id: 2, name: 'Shakib', email: 'shakib@gmail.com', phone: '234535626' },
    { id: 3, name: 'Hridoy', email: 'hridoy@gmail.com', phone: '234535626' },
    { id: 4, name: 'Salman', email: 'Salman@gmail.com', phone: '234535626' },
    { id: 5, name: 'Zabbar', email: 'Zabbar@gmail.com', phone: '234535626' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.json(users);
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango,orange, bananna']);
})

app.get('/fruits/mango/langla', (req, res) => {
    res.send('Yummy');
})

app.listen(port, () => {
    console.log('listen to port', port);
})