# Shipment Trip Validation System

This project is a **Shipment Trip Validation System** that allows users to input and validate trips related to shipments with multiple pickup, dropoff, and warehouse locations.

## URL: [https://loomport.co/]

## **Features**
- Users can add trips with pickup, dropoff, and optional warehouse locations.
- Data is persisted in the browser using **localStorage**.
- **Trip validation** is performed by calling a mock API (Mockaroo).
- A secondary **About Us** page provides more information about the application.

## **Project Structure**
- **index.html**: Main page where users input trip details.
- **about.html**: Secondary page providing explanations about the app.
- **style.css**: Stylesheet with dark theme and responsive design.
- **js/app.js**: Handles trip adding, localStorage, and validation logic.
- **js/trip.js**: Contains the logic for handling trips and shipment data.
- **js/validator.js**: Validates the trips through API calls.

## **Technologies Used**
- **HTML5** and **CSS3** for structure and design.
- **JavaScript (ES6)** modules for functionality.
- **localStorage** for persistent data storage.
- **Mockaroo API** for validating trips.

## **API**
The app uses **Mockaroo** to validate trip data. Mockaroo generates a mock API with random data for testing purposes.

## **License**
This project is open-source and free to use.

