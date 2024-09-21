// src/js/api.js

export const validateTripsAPI = async (trips) => {
    try {
        const apiUrl = 'https://my.api.mockaroo.com/trip.json?key=f285ab00';
        const numTrips = trips.length;

        const response = await fetch(`${apiUrl}&num_trips=${numTrips}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to validate trips');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw new Error('Network or server error');
    }
};
