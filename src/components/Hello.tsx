import * as React from "react";

interface HelloProps {
  compire: string;
  frameWork: string;
}

export const Hello = (props: HelloProps) => {
  return (
    <>
      <h3>
        hello from {props.compire} and {props.frameWork}
      </h3>
    </>
  );
};
