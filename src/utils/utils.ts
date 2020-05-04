
export function someHelpfulUtilOfAmazingness(item: string): number;
export function someHelpfulUtilOfAmazingness(item: boolean): string;
export function someHelpfulUtilOfAmazingness(item: object): string[];
export function someHelpfulUtilOfAmazingness(item: number): {[key: number]: string};
export function someHelpfulUtilOfAmazingness(item: Array<any>): number;
export function someHelpfulUtilOfAmazingness(): void;
export function someHelpfulUtilOfAmazingness(item?: any): any {
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

const test1 = someHelpfulUtilOfAmazingness('hi'); // 0
const test2 = someHelpfulUtilOfAmazingness(true); // 'foo'
const test3 = someHelpfulUtilOfAmazingness(['hi', 'bob']); // 2
const test4 = someHelpfulUtilOfAmazingness({'1': '2'}); // ['1']
const test5 = someHelpfulUtilOfAmazingness(2); // {'2': '1'}
const test6 = someHelpfulUtilOfAmazingness(); // 
const test7 = someHelpfulUtilOfAmazingness(null); // ??? <- What will it return?
