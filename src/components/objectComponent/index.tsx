import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useCtxObject } from "../../context/ctxObject";

export const ObjectComponent = () => {
  const [ctxObject, setCtxObject] = useCtxObject();

  useEffect(() => {
    setCtxObject({ test01: "teste 01!", test02: "teste 02!" });
  }, []);

  return (
    <>
      <Typography variant="h2">Object component</Typography>
      {ctxObject.test01}
    </>
  );
};
