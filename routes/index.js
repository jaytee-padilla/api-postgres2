const { Router } = require('express');
const artists = require('../controllers/artists');

const router = Router();

router.get('/', (req, res) => {
  res.send('Server is up and running');
});

// ARTIST
router.get('/artists', artists.getAllArtists);
router.get('/artists/:id', artists.getArtistById);
router.patch('/artists/:id', artists.updateArtist);
router.delete('/artists/:id', artists.deleteArtist);
router.post('/artists', artists.createArtist);

module.exports = router;