const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "ApolloGraphQLIsAwesome2023!"

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
    res.status(201).json( {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    } );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.post('/login', async (req, res) => {
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


app.post('/tokenVerify', (req, res) => {
    const token = req.body.accessToken; // Supposons que le token est envoyé dans le corps de la requête
  
    if (!token) {
      return res.status(401).json({ message: 'Token non fourni' });
    }
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      // Si le token est valide, decoded contiendra les informations décodées du token
      return res.status(200).json({ message: 'Token valide',isValid:true });
    } catch (error) {
      return res.status(401).json({ message: 'Token invalide',isValid:false });
    }
  });
  
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// && (await bcrypt.compare(password, user.password))