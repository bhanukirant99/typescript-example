import { HeaderProp } from "../counter.types";

export const Header = (props: HeaderProp) => {
  return (
    <header>
      <h2>
        counter value: <span> {props.state.count}</span>
      </h2>
      <h3>
        Status: <span> {props.state.status}</span>
      </h3>
    </header>
  );
};
