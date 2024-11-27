// const fs = require('fs');

// async function getDataFromDatabase() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('src/data/data.json', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(JSON.parse(data));
//       }
//     });
//   });
// }

// async function saveDataToDatabase(data) {
//   return new Promise((resolve, reject) => {
//     const jsonData = JSON.stringify(data);
//     fs.writeFile('src/data/data.json', jsonData, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// }

/*
  Instructions for students:
  Implement the function to save weather alerts.

  Function:
    saveWeatherAlert(alertDetails)

  Input:
    - alertDetails (object): The details of the weather alert to be saved.


  Tips:
    - Use the provided functions getDataFromDatabase() and saveDataToDatabase() to read and write data from the 'data.json' file.
    - Read the existing data from the 'data.json' file using getDataFromDatabase().
    - Write the data to the 'data.json' file using saveDataToDatabase().    
*/



// Level 4: Post Weather Alerts
// async function saveWeatherAlert(alertDetails) {
//    // TODO: Implement this function
// }

// module.exports = {
//   saveWeatherAlert
// };

const fs = require('fs');

// Function to get data from the database (read from the JSON file)
async function getDataFromDatabase() {
  return new Promise((resolve, reject) => {
    fs.readFile('src/data/data.json', (err, data) => {
      if (err) {
        reject(err);  // Reject if an error occurs while reading the file
      } else {
        resolve(JSON.parse(data));  // Resolve with parsed JSON data
      }
    });
  });
}

// Function to save data back to the database (write to the JSON file)
async function saveDataToDatabase(data) {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data, null, 2);  // Format the JSON data with indentation
    fs.writeFile('src/data/data.json', jsonData, (err) => {
      if (err) {
        reject(err);  // Reject if an error occurs while writing the file
      } else {
        resolve();  // Resolve when the data is successfully written
      }
    });
  });
}

// Function to save weather alert to the database
async function saveWeatherAlert(alertDetails) {
  try {
    // Step 1: Retrieve existing data from the JSON file
    const data = await getDataFromDatabase();
    
    // Step 2: Add the new alert to the existing data
    // Assuming there is an "alerts" array in the data where we store weather alerts.
    // You can modify this based on how alerts are structured in your data.json file.
    if (!data.alerts) {
      // If the 'alerts' array doesn't exist, create one
      data.alerts = [];
    }
    data.alerts.push(alertDetails);  // Add the new weather alert to the alerts array

    // Step 3: Save the updated data back to the database (write to the JSON file)
    await saveDataToDatabase(data);

    return { status: 'success', message: 'Weather alert saved successfully' };
  } catch (error) {
    // Handle any errors that occurred during the process
    throw new Error(`Failed to save weather alert: ${error.message}`);
  }
}

module.exports = {
  saveWeatherAlert,
};
