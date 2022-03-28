const router = require('express').Router();
const { request } = require('express');
const session = require('express-session');
const { where } = require('sequelize/types');
const { User } = require('../../models');

// Get ALL a new user

router.get('/', async(req, res) => {
  try {
    User.findAll( 
      {
      attributes: {exclude: ["password"]
      }.then((dbUserData) => res.json(dbUserData))
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get user by ID: 
// router.get('/', async(req, res) => {
//   try{
//     User.findOne( 
//       {
//       attributes: {exclude: ["password"] },
//       where: {
//         id: req.params.id,
//       }
//       }
//   }catch (err) {
//     console.log(err, 'User ID does not exist')
//       res.status(400).json(err);
//     }
// });


// CREATE a new user

router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      
      console.log('userApi data',userData);
      
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.user_id = userData.id;
    req.session.logged_in = true;
      
    res.json({ user: userData, message: 'You are now logged in!' });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;