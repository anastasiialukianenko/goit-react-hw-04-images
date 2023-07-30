import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import { SearchbarWrapper, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput, } from "../Emotion.styled";

export class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    
    state = {
searchText: '', 
    };

handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.searchText);
    this.reset();
};
    
    reset = () => {
        this.setState({ searchText: '' });
  };

  render() {
      return <div>
          <SearchbarWrapper>
  <SearchForm onSubmit={this.handleSubmit}>
    <SearchFormButton type="submit">
      <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
      type="text"
      value={this.state.searchText}
      onChange={this.handleChange}
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
          </SearchbarWrapper>
      </div>;
  }
}