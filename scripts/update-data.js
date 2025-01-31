const fs = require('fs');
const axios = require('axios');
async function updateData() {
  try {
    const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
    const data = response.data;

    // Save the data to a file
    fs.writeFileSync('src/assets/data.json', JSON.stringify(data));
    console.log('Dynamic data updated successfully!');
  } catch (error) {
    console.error('Error updating dynamic data:', error);
  }
}

updateData();