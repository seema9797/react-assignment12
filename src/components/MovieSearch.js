import React from "react";
import { Form } from "../Search.styled";

const MovieSearch = ({ searchInput, changeHandler, handleSubmit }) => {
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputsearch"
        placeholder="search"
        value={searchInput}
        onChange={changeHandler}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </Form>
  );
};

export default MovieSearch;
