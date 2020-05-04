export function someHelpfulUtil(item) {
    if (typeof item === 'string') {
        return 0;
    } else if (typeof item === 'boolean') {
        return 'foo';
    } else if (Array.isArray(item)) {
        return item.length;
    } else if (typeof item === 'object') {
        return Object.keys(item);
    } else if (typeof item === 'number') {
        return {[item]: '1'}
    }
}

someHelpfulUtil('hi'); // 0
someHelpfulUtil(true); // 'foo'
someHelpfulUtil(['hi', 'bob']); // 2
someHelpfulUtil({'1': '2'}); // ['1']
someHelpfulUtil(2); // {'2': '1'}
someHelpfulUtil(); // 
someHelpfulUtil(null); // ??? <- What will it return?
