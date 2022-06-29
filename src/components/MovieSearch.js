import React from "react";
import {InputBoxStyle,Form } from "../styles/Search.styled";

const MovieSearch = ({ searchInput, changeHandler, handleSubmit }) => {
  return (
    <Form>
      <InputBoxStyle
        onSubmit={handleSubmit}
        type="text"
        placeholder="search"
        value={searchInput}
        onChange={changeHandler}
      ></InputBoxStyle>
      <inputIcon className="fa-solid fa-magnifying-glass"></inputIcon>
    </Form>
  );
};

export default MovieSearch;
