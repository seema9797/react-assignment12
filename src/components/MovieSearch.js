import React from "react";
import {InputBoxStyle,Form ,InputIcon} from "../styles/Search.styled";

const MovieSearch = ({ searchInput, changeHandler, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputBoxStyle
        type="text"
        placeholder="search"
        value={searchInput}
        onChange={changeHandler}
      ></InputBoxStyle>
      <InputIcon className="fa-solid fa-magnifying-glass"></InputIcon>
    </Form>
  );
};

export default MovieSearch;
