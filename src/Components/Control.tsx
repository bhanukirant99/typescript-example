import { ControlProp } from "../counter.types";

const getStatus = (count: number): "Begin" | "Continue" | "Stop" => {
  if (count === 0) return "Begin";
  if (count > 0 && count < 10) return "Continue";
  return "Stop";
};

export const Control = ({ state: { count }, dispatch }: ControlProp) => {
  const clickHandler = (type: "INCREMENT" | "DECREMENT" | "RESET") => {
    switch (type) {
      case "INCREMENT":
        dispatch({
          type: "INCREMENT",
          payload: {
            status: getStatus(count + 1),
          },
        });
        break;

      case "DECREMENT":
        dispatch({
          type: "DECREMENT",
          payload: {
            status: getStatus(count - 1),
          },
        });
        break;

      case "RESET":
        dispatch({
          type: "RESET",
        });
        break;

      default:
        break;
    }
  };

  return (
    <main>
      <h3>Counter controls:</h3>
      <div>
        <button onClick={() => clickHandler("DECREMENT")}>- Decrease</button>
        <button onClick={() => clickHandler("INCREMENT")}>+ Increase</button>
        <button onClick={() => clickHandler("RESET")}>Reset</button>
      </div>
    </main>
  );
};
