import React from "react";
import "./search-box.css";

// notar que aca hacemos al placeholder que tenga una prop
// y lo mismo para el onChange
// las 2 props vienen del componente aplicado en app.js, esto hace que sea reutilizable
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
