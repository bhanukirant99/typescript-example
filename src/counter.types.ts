export type CounterType = {
  count: number;
  status: "Begin" | "Continue" | "Stop";
};

export type ActionType =
  | { type: "INCREMENT"; payload: { status: "Begin" | "Continue" | "Stop" } }
  | { type: "DECREMENT"; payload: { status: "Begin" | "Continue" | "Stop" } }
  | { type: "RESET" };

export type HeaderProp = {
  state: CounterType;
};

export type ControlProp = {
  state: CounterType;
  dispatch: React.Dispatch<ActionType>;
};
