const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lqn2pwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const coffeesCollection = client.db('coffeeStoreDB').collection('coffees');

    app.get('/coffees', async(req, res) => {
        // const cursor = coffeesCollection.find();
        // const result = await cursor.toArray();
        const result = await coffeesCollection.find().toArray();
        res.send(result);
    })

    app.get('/coffees/:id', async(req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await coffeesCollection.findOne(query);
        res.send(result);
    })

    app.post('/coffees', async(req, res) => {
        const newCoffee = req.body;
        console.log(newCoffee);
        const result = await coffeesCollection.insertOne(newCoffee);
        res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello from Coffee Store Server!')
})

app.listen(port, () => {
    console.log('Coffe Store Server is running on port', port);
})
