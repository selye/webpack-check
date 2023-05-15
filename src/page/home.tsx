import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getContent = () => {
    setLoading(true)
  }

  const repeatGet = () => {
    setLoading(false)
  }

  useEffect(() => {
    console.log("获取数据")
  },[loading])

  if (!loading) {
    return (
      <>
        <p>加载中。。。。</p>
        <button onClick={getContent}>获取</button>
      </>
    );
  }

  return (
    <div>
        <button onClick={repeatGet}>重复获取</button>

      <Link to={"contacts/1"}>contact1</Link>
      &nbsp;
      <Link to={"contacts/2"}>contact2</Link>
      <div>home</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
