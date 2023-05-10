import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "../page/about";
import { Amap } from "../page/amap";
import { Contact } from "../page/contact";
import { Edit } from "../page/edit";
import { Home } from "../page/home";
import { Hooks } from "../page/hooks";

export const Router = () => {
  return (
    <BrowserRouter>
      <>
        <div>
          <Link to="/">home</Link>
          &nbsp;
          <Link to="/about">about</Link>
          &nbsp;
          <Link to="/hooks">hook</Link>
          &nbsp;
          <Link to="/amap">Amap</Link>
        </div>
      </>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="contacts/:editid" element={<Contact />}></Route>
          <Route path="contacts/:editid/edit" element={<Edit />}></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/amap" element={<Amap />} />
      </Routes>
    </BrowserRouter>
  );
};
