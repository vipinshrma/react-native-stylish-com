export function formatPrice(value) {
    // Check if the input is a number
    if (typeof value !== 'number') {
        throw new TypeError('Value must be a number');
    }

    // Create a formatter for USD currency
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // Format and return the value
    return formatter.format(value);
}