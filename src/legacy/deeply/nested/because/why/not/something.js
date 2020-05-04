export function convertToString(itemToString) {
    try {
        return itemToString.toString();
    } catch (e) {
        return '';
    }
}