// Function to read and display JSON data
function readAndDisplayJSON() {
    const jsonContainer = document.getElementById('json-container');

    // Use the Fetch API to read the JSON file
    fetch('../json/morning.json')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Display the JSON data
            // const valueArray = Object.values(jsonContainer)
            jsonContainer.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error reading JSON file:', error);
        });
        
}



// Call the function to read and display the JSON data
readAndDisplayJSON();
