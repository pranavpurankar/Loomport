export class Trip {
    constructor(pickupLocation, dropoffLocation, warehouseLocation) {
        this.pickupLocation = pickupLocation;
        this.dropoffLocation = dropoffLocation;
        this.warehouseLocation = warehouseLocation;
    }
}

export class Shipment {
    constructor() {
        this.trips = [];
    }

    addTrip(trip) {
        this.trips.push(trip);
    }

    getTrips() {
        return this.trips;
    }
}
