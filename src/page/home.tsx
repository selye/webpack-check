import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to={"contacts/1"}>contact1</Link>
      &nbsp;
      <Link to={"contacts/2"}>contact2</Link>
      <div>home</div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};
