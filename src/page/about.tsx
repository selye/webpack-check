import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { decrement, increment } from "../store/counter";

export const About = () => {
  const location = useLocation();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
