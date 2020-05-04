
function someHelpfulUtil(item: string): number;
function someHelpfulUtil(item: boolean): string;
function someHelpfulUtil(item: object): string[];
function someHelpfulUtil(item: number): {[key: number]: string};
function someHelpfulUtil(item: Array<any>): number;
function someHelpfulUtil(): void;
function someHelpfulUtil(item?: any): any {
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

export { someHelpfulUtil };

const test1 = someHelpfulUtil('hi'); // 0
const test2 = someHelpfulUtil(true); // 'foo'
const test3 = someHelpfulUtil(['hi', 'bob']); // 2
const test4 = someHelpfulUtil({'1': '2'}); // ['1']
const test5 = someHelpfulUtil(2); // {'2': '1'}
const test6 = someHelpfulUtil(); // 
const test7 = someHelpfulUtil(null); // ??? <- What will it return?
