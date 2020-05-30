import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    suggestions: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
    };
  }

  // Event fired when the input value is changed
  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
        suggestion.date.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
        suggestion.genre.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = (e) => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className={utilStyles.suggestions}>
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <Link
                  href="/posts/[id]"
                  as={`/posts/${suggestion.id}`}
                  key={suggestion.id}
                >
                  <li>
                    <img
                      src={suggestion.thumbnail}
                      alt=""
                      className={utilStyles.suggestionImg}
                    />
                    <span className={utilStyles.suggestDetail}>
                      {suggestion.title} <br />
                      Rating: {suggestion.rating} <br />
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className={utilStyles.noSuggestion}>
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <div className={utilStyles.searchContainer}>
          <input
            className={utilStyles.search}
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            placeholder="Search..."
          />
          {suggestionsListComponent}
        </div>
      </Fragment>
    );
  }
}

export default Autocomplete;
