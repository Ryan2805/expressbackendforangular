const express = require('express');
const app = express();
const axios = require('axios');
app.get('/api/photos/:rover', async (req, res) => {
    try {
      const { sol, camera, page } = req.query;
      const { rover } = req.params; // Extract rover name from URL parameter
      const apiKey = '6ei2Sv5v1CfeHRDi8GJOErRrwnlTBdY8hxM5tUHO';
  
      const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`;
      const response = await axios.get(apiUrl, {
        params: {
          sol,
          camera,
          page,
          api_key: apiKey
        }
      });
  
      const photos = response.data.photos;
      res.json({ photos });
    } catch (error) {
      console.error('Error fetching photos:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
