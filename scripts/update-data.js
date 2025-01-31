const fs = require('fs');
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTRFQiOiIwOTc3MjcyOTY3IiwiZW1haWwiOiJjaGlraWV0ODhAZ21haWwuY29tIiwiZ2lkIjoiMTAzMzg2Mjc5NjM1MjIxMDg4MTM0IiwiaWF0IjoxNzM4MzQ4MDI1LCJleHAiOjE3NDA5NDAwMjV9.zK2TuPxIJ9Cvn9YWICpVsRKf6Ra4nKyokVyhpFU69pc";
async function updateData() {
  try {
    // Fetch dynamic data from your API
    const response = await fetch('https://api.tazagroup.vn/users', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    // Save the data to a file in the Angular assets folder
    fs.writeFileSync('public/assets/data.json', JSON.stringify(data));
    console.log('Dynamic data updated successfully!');
  } catch (error) {
    console.error('Error updating dynamic data:', error);
  }
}

updateData();