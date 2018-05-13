import express from 'express';
import { productos } from '../models';
import { RSA_NO_PADDING } from 'constants';

const router = express.Router();

// Login
router.post('/', (req, res) => {
  productos.findAll().then((products) => {
    res.json({

    });
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
