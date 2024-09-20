// modules/trip.js
export class Trip {
    constructor(pickup, dropoff, warehouse = null) {
        this.pickup = pickup;
        this.dropoff = dropoff;
        this.warehouse = warehouse;
    }

    toJSON() {
        return {
            pickup: this.pickup,
            dropoff: this.dropoff,
            warehouse: this.warehouse
        };
    }
}

export class Shipment {
    constructor() {
        this.trips = [];
    }

    addTrip(trip) {
        this.trips.push(trip);
    }

    async validateTrips(apiUrl) {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ trips: this.trips.map(trip => trip.toJSON()) }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to validate trips');
        }
        return response.json();
    }
}
