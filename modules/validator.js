// modules/validator.js
export function parseCSV(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const lines = reader.result.split('\n');
            const trips = lines.map(line => {
                const [pickup, dropoff, warehouse] = line.split(',');
                return { pickup, dropoff, warehouse: warehouse || null };
            });
            resolve(trips);
        };
        reader.onerror = () => reject('Error reading file');
        reader.readAsText(file);
    });
}
