import { Routes, Route, Navigate } from "react-router-dom";
import Detail from "../Pages/Detail";
import Buy from "../Pages/Buy";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Signin from "../Pages/Signin";
import Login from "../Pages/Login";
import AddItem from "../Pages/Add Item";
import DeleteItem from "../Pages/Delete Item";
import ModifyItem from "../Pages/Modify";

export default function Public(props) {
const {search} = props
  return (
    <Routes>
      <Route path="/" element={<Home search={search}/>} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/buy/:id" element={<Buy />} />
      <Route path="/log" element={<Login />} />
      <Route path="/sign" element={<Signin />} />
      <Route path="/add" element={<AddItem />} />
      <Route path="/delete" element={<DeleteItem />} />
      <Route path="/modify/:id" element={<ModifyItem />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
