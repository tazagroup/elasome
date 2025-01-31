const fs = require('fs');

async function updateData() {
  try {
    // Fetch dynamic data from your API
    const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    // Save the data to a file in the Angular assets folder
    fs.writeFileSync('src/assets/data.json', JSON.stringify(data));
    console.log('Dynamic data updated successfully!');
  } catch (error) {
    console.error('Error updating dynamic data:', error);
  }
}

updateData();