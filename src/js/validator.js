export async function validateTrips(shipment, apiValidator) {
    try {
        const trips = shipment.getTrips();
        const response = await apiValidator(trips);
        return response;
    } catch (error) {
        return { status: 'error', message: 'Failed to validate trips.' };
    }
}

export async function validateTripsAPI(trips) {
    const apiEndpoint = 'https://api.mockaroo.com/api/YOUR_API_KEY?count=5&key=YOUR_API_KEY'; // Use the correct Mockaroo API
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trips),
    });
    return await response.json();
}
