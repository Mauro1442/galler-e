import React from "react";
import Products from "../Components/Products";

export default function Home(props) {
  const {search} = props


  return (
    <div className="home">
      <Products search={search}/>
    </div>
  );
}
