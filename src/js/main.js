import { Shipment, Trip } from './trip.js';
import { validateTrips, validateTripsAPI } from './validator.js';

const shipment = new Shipment();
const tripList = document.getElementById('tripList');
const resultDiv = document.getElementById('resultDiv');

document.getElementById('addTrip').addEventListener('click', () => {
    const pickupLocation = document.getElementById('pickupLocation').value;
    const dropoffLocation = document.getElementById('dropoffLocation').value;
    const warehouseLocation = document.getElementById('warehouseLocation').value;

    // Validate inputs
    if (!pickupLocation || !dropoffLocation) {
        alert('Please fill out both pickup and dropoff locations.');
        return;
    }

    const newTrip = new Trip(pickupLocation, dropoffLocation, warehouseLocation || null);
    shipment.addTrip(newTrip);
    
    // Display trip in the UI
    const tripElement = document.createElement('div');
    tripElement.innerHTML = `
        <strong>Pickup:</strong> ${pickupLocation}, 
        <strong>Dropoff:</strong> ${dropoffLocation}, 
        <strong>Warehouse:</strong> ${warehouseLocation || 'N/A'}
    `;
    tripList.appendChild(tripElement);
    
    // Clear input fields
    document.getElementById('pickupLocation').value = '';
    document.getElementById('dropoffLocation').value = '';
    document.getElementById('warehouseLocation').value = '';
});

document.getElementById('tripForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    if (shipment.getTrips().length === 0) {
        alert('Please add at least one trip before validating.');
        return;
    }

    resultDiv.innerHTML = 'Validating trips...';
    const result = await validateTrips(shipment, validateTripsAPI);

    // Display the validation result
    resultDiv.innerHTML = `
        <h3>Validation Result</h3>
        <p>Status: ${result.status}</p>
        <p>Message: ${result.message}</p>
    `;
    resultDiv.style.display = 'block';
});
