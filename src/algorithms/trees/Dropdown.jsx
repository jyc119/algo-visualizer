import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ options, title }) => {
  const [listOpen, setListOpen] = useState(false);

  // Add or remove the event listener when the list is open or closed
  useEffect(() => {
    if (listOpen) {
      window.addEventListener("click", closeDropdown);
    } else {
      window.removeEventListener("click", closeDropdown);
    }

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("click", closeDropdown);
  }, [listOpen]);

  // Function to close the dropdown
  const closeDropdown = () => {
    setListOpen(false);
  };

  // Function to toggle the dropdown open or closed
  const toggleList = (e) => {
    e.stopPropagation(); // Prevents event propagation to avoid unwanted closing
    setListOpen((prevListOpen) => !prevListOpen);
  };

  // Function to handle item selection
  const selectItem = (selectedOption, id, stateKey) => {
    setListOpen(false);
    // handle item selection logic here
  };

  return (
    <div className="bg-blue-200 rounded p-4">
      <div className="dropdown-header" onClick={toggleList}>
        <div className="dropdown-header-title flex items-center">
          <span>
            {title === "Select Traversal" ? `${title}` : `${title} Traversal`}
          </span>
          <FontAwesomeIcon
            icon={listOpen ? faChevronUp : faChevronDown}
            className="ml-2"
          />
        </div>
      </div>

      {listOpen && (
        <ul className="dropdown-list" onClick={(e) => e.stopPropagation()}>
          {options.map((option) => (
            <li
              className="dropdown-list-item"
              key={option.value}
              onClick={() => selectItem(option.value, option.id, option.key)}
            >
              <span>{option.value} Traversal</span>
              {/* Optionally, you can display a check icon here for selected items */}
              {/* <span>{option.selected && <FontAwesome name="check" />}</span> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
