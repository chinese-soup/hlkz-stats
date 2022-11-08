import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AutoSuggest from "react-autosuggest";
import apiclient from "../apiclient";
import useDarkMode from "use-dark-mode";

const Navbar = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [maps, setMaps] = useState([]);
  const darkMode = useDarkMode(false);

  const history = useHistory();

  const lowerCasedMaps = maps.map((map) => {
    return {
      name: map.name.toLowerCase(),
    };
  });

  function getSuggestions(value) {
    return lowerCasedMaps.filter((map) =>
      map.name.includes(value.trim().toLowerCase())
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      getSuggestions(e.target[0].value).findIndex((object) => {
        return object.name === e.target[0].value;
      }) !== -1
    ) {
      history.push(`/maps/${e.target[0].value}`);
    }
  };

  return (
    <div>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/maps">
              <i className="far fa-map"></i> Maps
            </Link>
          </li>
          <li>
            <Link to="/players">
              <i className="fas fa-walking"></i> Players
            </Link>
          </li>
          <li>
            <Link to="/info">
              <i className="fas fa-question-circle"></i> Info
            </Link>
          </li>
          <li className="searchicon">
            <i className="fas fa-search"></i>{" "}
            <form onSubmit={handleSubmit}>
              <AutoSuggest
                suggestions={suggestions.slice(0, 10)}
                onSuggestionsClearRequested={() => setSuggestions([])}
                onSuggestionsFetchRequested={({ value }) => {
                  setValue(value);
                  setSuggestions(getSuggestions(value));
                }}
                onSuggestionSelected={(_, { suggestionValue }) =>
                  history.push(`/maps/${suggestionValue}`)
                }
                getSuggestionValue={(suggestion) => suggestion.name}
                renderSuggestion={(suggestion) => (
                  <span>{suggestion.name}</span>
                )}
                inputProps={{
                  placeholder: "Search map...",
                  className: "search",
                  value: value,
                  onChange: (_, { newValue, method }) => {
                    setValue(newValue);
                  },
                  onFocus: () => {
                    apiclient.get("/maplist").then((response) => {
                      const data = response.data.data;
                      setMaps(data);
                    });
                  },
                }}
              />
            </form>
            <span className="search"></span>
          </li>
          <li></li>
          <li>
            <div className="themeToggle">
              <Link to="#" onClick={darkMode.toggle}>
                {darkMode.value === false && <i className="far fa-moon"></i>}
                {darkMode.value === true && <i className="fas fa-sun"></i>}
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
