const aString: string = 'hi';
const aBoolean: boolean = false;
const aNumber: number = 1;
const aArray: number[] = [1];
const aArray1: Array<number> = aArray;
const aTuple: [string, boolean] = ['hi', false];
enum Color {Red = 1, Green, Blue};
const aEnum: Color = Color.Red;
const aAny: any = 'number, string, object, anything!';
const aVoid: void = undefined;
const aVoid1: void = null; // only if strictNullChecks is false (default)
const aUndefined: undefined = undefined;
const aNull: null = null;
const aObject: object = {};
const aObject1: object = {'hi': 1};

// functions with no end point (while loop that never ends, fail function, function that throws an error)
const aNever = (): never => {
    throw new Error('message');
};

// Type casting - NOTE!!!!! `as` syntax must be used in JSX
const aCast: boolean = (<boolean><unknown>aNumber);
const aCast1: boolean = aNumber as unknown as boolean;

export function hi() {
    return 'hi';
}