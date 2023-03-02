import * as React from "react";

interface HelloProps {
  compire: string;
  frameWork: string;
}

export const Hello = (props: HelloProps) => {
  /* 枚举 */
  enum Color {
    Red = "1",
    Green = "2",
    Blue = "3",
  }

  /* void 表示没有返回值 */

  const getVoid: () => void = () => {
    return "11";
  };

  /* 类型断言 */
  const someValue: any = "this may be is a string";
  const strLength = (someValue as string).length;

  const r: Color = Color.Red;

  return (
    <>
      <h3>
        hello from {props.compire} and {props.frameWork}
      </h3>
      <div></div>
    </>
  );
};
