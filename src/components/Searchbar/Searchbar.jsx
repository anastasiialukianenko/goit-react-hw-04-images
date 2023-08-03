import React, { useState } from "react";
import PropTypes from 'prop-types'; 
import { SearchbarWrapper, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, } from "../Emotion.styled";

export function Searchbar({ onSubmit }) {
  
  const [searchText, setSearchText] = useState('');


  const handleChange = e => {
    setSearchText(e.target.value)
  };



 const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchText);
    setSearchText("");
 };
  
  
  return (<div>
          <SearchbarWrapper>
  <SearchForm onSubmit={handleSubmit}>
    <SearchFormButton type="submit">
      <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
      type="text"
      value={searchText}
      onChange={handleChange}
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
          </SearchbarWrapper>
      </div>)
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}