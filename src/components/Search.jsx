import React from "react";
import '../App.css'

export default function Search() {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Enter a city ..." className="textInput p-3"/>
        <input type="submit" value="Search" className="searchButton p-3 mx-2" />
      </form>
    </>
  );
}
