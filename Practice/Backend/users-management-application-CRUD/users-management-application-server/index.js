const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//user: simpleDBUser
//password: PPA1BOcgLuUzXVBL

const uri = "mongodb+srv://simpleDBUser:PPA1BOcgLuUzXVBL@cluster0.lqn2pwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}); 

async function run() {
    try {
    //   await client.connect();

        const database = client.db('usersDB');
        const usersCollection = database.collection('users');

        app.get('/users', async(req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/users/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        app.post("/users", async(req, res) => {
          console.log('data in the server', req.body);
          const newUser = req.body;
          const result = await usersCollection.insertOne(newUser);
          res.send(result);
        });

        app.put('/users/:id', async(req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const user = req.body;

            const updatedDoc = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            }
            
            const option = { upsert: true };
            const result = await usersCollection.updateOne(filter, updatedDoc, option);
            res.send(result);
        })

        app.delete('/users/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
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
    res.send('Users Management Server is Running');
})

// const users = [
//     { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
//     { id: 2, name: 'Sabnoor', email: 'Sabnoor@gmail.com' },
//     { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
// ]

// app.get('/users', (req, res) => {
//     res.send(users);
// })

// app.post('/users', (req, res) => {
//     const newUser = req.body;
//     newUser.id = users.length + 1;

//     users.push(newUser);

//     res.send(newUser);
// })

app.listen(port, () => {
    console.log(`Server is running on port, ${port}`);
})