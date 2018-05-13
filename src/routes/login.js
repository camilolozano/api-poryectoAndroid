import express from 'express';
import { users } from '../models';

const router = express.Router();

// Login
router.post('/', (req, res) => {
  users.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then((user) => {
    console.log(user);
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
