import express from 'express';  
import bodyParser from 'body-parser';  
import cors from 'cors';

const app = express(); 

app.use(cors({
    origin: 'http://localhost:5173',  // Allow frontend origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let users = [
    {
        "name": "John",
        "age": 30
    },
    {
        "name": "Jane",
        "age": 25
    }
];

app.get('/', (req, res) => { 
    res.json(users); 
});  

app.post('/addUser', (req, res) => {
    const { name, age } = req.body;  // Fix: Use 'name' instead of 'user'
    users.push({ name, age });
    res.json({ "message": "User added successfully" });
});

app.post('/findUser', (req, res) => {
    const { name } = req.body;  // Fix: Extract 'name' properly
    const user = users.find(user => user.name === name);  // Fix: Correct comparison

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ "message": "User not found" });
    }
});

app.listen(3000, () => { 
    console.log("Server is listening on port 3000"); 
});
