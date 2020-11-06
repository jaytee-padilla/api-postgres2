const { Router } = require('express');
// const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => {
  res.send('Server is up and running');
});

module.exports = router;