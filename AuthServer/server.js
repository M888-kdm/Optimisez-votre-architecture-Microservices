const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  try {
    const { firstName,lastName,email,password } = req.body;
        // Email
    const  userEmail = await User.findOne({
          where: {
            email: req.body.email
          }
        });
    if (userEmail) {
        return res.status(400).send({
        message: "Failed! Email is already in use!"
    });
        }
    const salt = await bcrypt.genSalt(10);
    const cryptedpassword = await bcrypt.hash(password, salt);
    console.log(cryptedpassword)
    const user = await User.create({ firstName,lastName,email,password:cryptedpassword  });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.post('/login', async (req, res) => {
    const SECRET_KEY = "ApolloGraphQLIsAwesome2023!"
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        const isValidPassword = await bcrypt.compare(password, user.password);
      if (user && isValidPassword) {
        const token = jwt.sign({ id: user.id }, SECRET_KEY);
        
        // Utilisez res.json pour envoyer la réponse au client
        res.json({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          accessToken: token
        });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// && (await bcrypt.compare(password, user.password))