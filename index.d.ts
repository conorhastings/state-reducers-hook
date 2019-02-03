interface ChangeObject {
    type: string;
}
interface ReturnArray {
    0: object;
    1: (change: ChangeObject) => object;
}
export default function (initialState: object, stateReducers: Array<(state: object, change: ChangeObject) => object>): ReturnArray;
export {};
