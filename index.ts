import { useState } from 'react';

interface ChangeObject {
  type: string;
}

interface ReturnArray {
  0: object;
  1: (change: ChangeObject) => object;
}

export default function (
  initialState: object,
  stateReducers: Array<(state: object, change: ChangeObject) => object>
): ReturnArray {
  let [state, setState] = useState(initialState);
  const defaultReducer = (state: object, change: ChangeObject): object => Object.assign(state, change);
  const dispatch = (change: ChangeObject): object => {
    const newState: object = [defaultReducer].concat(stateReducers).reduce(
      (
        finalState: object,
        stateReducer: (state: object, change: ChangeObject) => object
      ) => {
        return Object.assign(finalState, stateReducer(finalState, change));
      },
      Object.assign({}, state)
    );
    setState(newState)
    return newState;
  };
  const returnArray: ReturnArray = [state, dispatch];
  return returnArray || [];
}
