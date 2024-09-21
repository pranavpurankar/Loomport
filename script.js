async function validateTrip() {
    const tripId = document.getElementById('tripId').value.trim(); // Get Trip ID from input

    const apiEndpoint = 'https://my.api.mockaroo.com/trip.json?key=f285ab00'; // Correct Mockaroo API key

    try {
        const response = await fetch(apiEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const tripsData = await response.json();

        // console.log('API Response:', tripsData);

        const matchingTrip = tripsData.find(trip => trip.id == tripId);

        if (matchingTrip) {
            displayResult(`
                <strong>Trip ID:</strong> ${matchingTrip.id}<br>
                <strong>Pickup Location:</strong> ${matchingTrip.pickupLocation}<br>
                <strong>Dropoff Location:</strong> ${matchingTrip.dropoffLocation}<br>
                <strong>Warehouse Location:</strong> ${matchingTrip.warehouse}<br>
                <strong>Status:</strong> ${matchingTrip.tripStatus}<br>
                <strong>Message:</strong> ${matchingTrip.message}
            `);
        } else {
            displayResult('No matching trip found for the given ID.');
        }
    } catch (error) {
        displayResult(`Error: ${error.message}`);
    }
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;
}
