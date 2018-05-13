import express from 'express';
import { users } from '../models';

const router = express.Router();

// get all users
router.get('/', (req, res) => {
  users.findAll({
    where: {
      state: true
    }
  }).then(users => {
    res.json({
      users
    });
  }).catch(err => console.log(err));
});

// get specific users
router.get('/:id', (req, res) => {
  users.findAll({
    where: {
      idUser: req.params.id
    }
  }).then(user => {
    res.json({
      user
    });
  }).catch(err => console.log(err));
});

// edit users
router.put('/', (req, res) => {
  const attributes = req.body;
  users.findOne({
    where: {
      idContact: attributes.id
    }
  }).then((contact) => {
    return users.updateAttributes({
      name: attributes.name,
      lastname: attributes.lastname,
      number: attributes.number,
      email: attributes.email
    });
  })
  .then(() => {
    res.json({
      success: true,
      msg: 'Successful update'
    });
  })
  .catch(err => console.log(err));
});

// create users
router.post('/', (req, res) => {
  const attributes = req.body;
  users.create({
    name: attributes.name,
    lastname: attributes.lastname,
    number: attributes.number,
    email: attributes.email
  }).then(() => {
    res.json({
      success: true,
      msg: 'Successfully created'
    });
  }).catch((err) => {
    console.log(err);
  });
});

// remove users
router.put('/remove', (req, res) => {
  const attributes = req.body;
  users.findOne({
    where: {
      idContact: attributes.id
    }
  }).then((contact) => {
    return contact.updateAttributes({
      state: false
    });
  })
  .then(() => {
    res.json({
      success: true,
      msg: 'Successful remove'
    });
  })
  .catch(err => console.log(err));
});

module.exports = router;
