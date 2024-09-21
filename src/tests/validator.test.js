import { describe, it, expect } from 'vitest';
import { validateTrips } from '../js/validator.js';
import { Shipment, Trip } from '../js/trip.js';

describe('validateTrips', () => {
    it('should validate a shipment with valid trips', async () => {
        const mockAPI = async (trips) => {
            return { status: 'valid', message: 'All trips are valid.' };
        };

        const shipment = new Shipment();
        shipment.addTrip(new Trip('Bengaluru', 'Mumbai', 'Hyderabad'));
        shipment.addTrip(new Trip('Delhi', 'Chennai', null));

        const result = await validateTrips(shipment, mockAPI);

        expect(result.status).toBe('valid');
        expect(result.message).toBe('All trips are valid.');
    });

    it('should return error on API failure', async () => {
        const mockAPI = async () => {
            throw new Error('API error');
        };

        const shipment = new Shipment();
        shipment.addTrip(new Trip('Bengaluru', 'Mumbai', 'Hyderabad'));

        const result = await validateTrips(shipment, mockAPI);

        expect(result.status).toBe('error');
        expect(result.message).toBe('Failed to validate trips.');
    });
});
