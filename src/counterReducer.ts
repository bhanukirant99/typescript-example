import { CounterType, ActionType } from "./counter.types";

export const counterReducer = (
  state: CounterType,
  action: ActionType
): CounterType => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, status: action.payload.status };

    case "DECREMENT":
      return { count: state.count - 1, status: action.payload.status };

    case "RESET":
      return { count: 0, status: "Begin" };

    default:
      return state;
  }
};
