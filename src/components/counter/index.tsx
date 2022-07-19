import { Typography } from "@mui/material";
import { useCount } from "../../context/contextCounter";

export const Counter = () => {
  const { count, setCount } = useCount();

  return (
    <>
      <Typography>test inside counter</Typography>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count + 1
      </button>
    </>
  );
};
