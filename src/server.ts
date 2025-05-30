import express from 'express';
import {client} from './db';

const app = express();
app.use(express.json());


client.connect()

app.post('/players', async (req, res) => {
        const {name, team, position, goals} = req.body;
        const result = await client.query('' +
            'INSERT INTO players (name, team, position, goals) VALUES ($1, $2,$3,$4)' +
            'RETURNING *',
            [name, team, position, goals]);
        res.status(201).json(result.rows[0]);
});

app.get('/players/:id', async (req, res) => {
        const result = await client.query('' +
            'SELECT * FROM players WHERE id = $1',
            [req.params.id]);
        res.json(result.rows[0]);
})

app.put('/players/:id', async (req, res) => {
        const {name, team, position, goals} = req.body;
        const result = await client.query('' +
            'UPDATE players SET name = $1, team = $2, position = $3, goals = $4 WHERE id = $5',
            [name, team, position, goals, req.params.id]);
        res.json(result.rows[0]);
})

app.delete('/players/:id', async (req, res) => {
        await client.query('' +
            'DELETE FROM players WHERE id = $1',
            [req.params.id]);
        res.sendStatus(204);
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});