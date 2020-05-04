
export function someHelpfulUtil(item: string): number;
export function someHelpfulUtil(item: boolean): string;
export function someHelpfulUtil(item: object): string[];
export function someHelpfulUtil(item: number): {[key: number]: string};
export function someHelpfulUtil(item: Array<any>): number;
export function someHelpfulUtil(): void;
export function someHelpfulUtil(item?: any): any {
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

const test1 = someHelpfulUtil('hi'); // 0
const test2 = someHelpfulUtil(true); // 'foo'
const test3 = someHelpfulUtil(['hi', 'bob']); // 2
const test4 = someHelpfulUtil({'1': '2'}); // ['1']
const test5 = someHelpfulUtil(2); // {'2': '1'}
const test6 = someHelpfulUtil(); // 
const test7 = someHelpfulUtil(null); // ??? <- What will it return?
