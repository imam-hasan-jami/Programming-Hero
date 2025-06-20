const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  console.log("cookie in the middleware", token);

  if (!token) {
    return res.status(401).send({ message: "Unauthorized access" });
  }

  // verify the token
  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

// 6uIUWUOvcpedNvNR
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
    const usersCollection = client.db('coffeeStoreDB').collection('users');

    // jwt related api
    // app.post("/jwt", async (req, res) => {
    //   const { email } = req.body;
    //   const user = { email };
    //   const token = jwt.sign(user, process.env.JWT_ACCESS_SECRET, { expiresIn: "1h" });
    //   res.send({ token });
    // });

    app.post("/jwt", async (req, res) => {
      const userData = req.body;
      const token = jwt.sign(userData, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "1h",
      });

      res.cookie('token', token, {
        httpOnly: true,
        secure: false, // Set to true if using HTTPS
      })

      res.send({ success: true });
    });

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

    app.put("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCoffee = req.body;
      const updatedDoc = {
        $set: updatedCoffee,
      };

      // const updatedDoc = {
      //     $set: {
      //         name: updatedCoffee.name,
      //         supplier: updatedCoffee.supplier
      //        ...
      //     }
      // }

      const result = await coffeesCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    app.delete('/coffees/:id', async(req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await coffeesCollection.deleteOne(query);
        res.send(result);
    })

    app.get('/users', async(req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    })

    app.get("/users/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      // console.log('inside users api', req.cookies);
      
      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "Forbidden access" });
      }

      const query = { email: email };
      const user = await usersCollection.findOne(query);
      res.send(user);
    });

    app.post('/users', async(req, res) => {
        const userProfile = req.body;
        console.log(userProfile);
        const result = await usersCollection.insertOne(userProfile);
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
