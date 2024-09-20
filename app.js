// app.js
import { Trip, Shipment } from './modules/trip.js';
import { parseCSV } from './modules/validator.js';

const shipment = new Shipment();
const apiUrl = 'https://api.example.com/validate-shipment';  // Replace with your real API

// DOM elements
const pickupInput = document.getElementById('pickup');
const dropoffInput = document.getElementById('dropoff');
const warehouseInput = document.getElementById('warehouse');
const addTripButton = document.getElementById('addTrip');
const validateTripsButton = document.getElementById('validateTrips');
const resultDiv = document.getElementById('result');
const csvFileInput = document.getElementById('csvFile');
const uploadCSVButton = document.getElementById('uploadCSV');

// Add a single trip
addTripButton.addEventListener('click', () => {
    const pickup = pickupInput.value.trim();
    const dropoff = dropoffInput.value.trim();
    const warehouse = warehouseInput.value.trim() || null;

    if (pickup && dropoff) {
        const trip = new Trip(pickup, dropoff, warehouse);
        shipment.addTrip(trip);
        resultDiv.innerHTML += `<p>Added trip: ${pickup} -> ${dropoff} (Warehouse: ${warehouse || 'None'})</p>`;
    } else {
        alert('Please enter both pickup and dropoff points.');
    }

    pickupInput.value = '';
    dropoffInput.value = '';
    warehouseInput.value = '';
});

// Upload and parse CSV
uploadCSVButton.addEventListener('click', async () => {
    const file = csvFileInput.files[0];
    if (file) {
        try {
            const parsedTrips = await parseCSV(file);
            parsedTrips.forEach(({ pickup, dropoff, warehouse }) => {
                const trip = new Trip(pickup, dropoff, warehouse);
                shipment.addTrip(trip);
                resultDiv.innerHTML += `<p>Added trip: ${pickup} -> ${dropoff} (Warehouse: ${warehouse || 'None'})</p>`;
            });
        } catch (error) {
            alert(error);
        }
    } else {
        alert('Please upload a CSV file.');
    }
});

// Validate trips
validateTripsButton.addEventListener('click', async () => {
    try {
        const validationResults = await shipment.validateTrips(apiUrl);
        resultDiv.innerHTML += `<p>Validation Result: ${validationResults.status}</p>`;
    } catch (error) {
        resultDiv.innerHTML += `<p>Error: ${error.message}</p>`;
    }
});
