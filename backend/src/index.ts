import express from 'express';
import { db, feeding } from './db';
import { eq } from 'drizzle-orm'
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors())

const port = 3000;

const generateDateAndTimeObject = () => {
    const dateTime = new Date();
    const locale = 'en-US'
    const dateOptions: {} = { month: 'long', day: 'numeric', year: 'numeric' }
    const timeOptions: {} = { hour: 'numeric', minute: '2-digit', hour12: true }

    return {
        date: dateTime.toLocaleDateString(locale, dateOptions),
        time: dateTime.toLocaleTimeString(locale, timeOptions)
    }
}

app.post('/feedings', async (_req, res) => {
    const created: any = generateDateAndTimeObject();
    created.amount = _req.body.amount;
    await db.insert(feeding).values(created)
    res.status(201).json(created);
})

app.get('/feedings', (_req, res) => {
    const results = db.select().from(feeding)
    res.status(200).json(results.all());
});


app.get('/feedings/:id', async (_req, res) => {
    const results = await db.select().from(feeding)
        .where(eq(feeding.id, Number(_req.params.id)));
    res.status(200).json(results[0])
});


app.put('/feedings/:id', async (_req, res) => {

    const toUpdate = { id: Number(_req.params.id), date: _req.body.date, time: _req.body.time }
    await db.update(feeding).set(toUpdate).where(eq(feeding.id, Number(_req.params.id)))
    res.status(200).json(toUpdate)
});


app.delete('/feedings/:id', async (_req, res) => {
    const deletedFeeding = await db.delete(feeding)
        .where(eq(feeding.id, Number(_req.params.id)))
        .returning();
    res.status(200).json(deletedFeeding)
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

