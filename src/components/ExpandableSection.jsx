import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";

const ExpandableSection = ({ title, items, page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => {
    setIsOpen(!isOpen);

    // If page is present and the section is being opened, navigate to the page
    if (page && !isOpen) {
      console.log("here");
      console.log(page);
      navigate(page);
    }
  };

  return (
    <section className="bg-blue-400">
      <div
        className={classNames(
          "flex p-4 justify-between items-center cursor-pointer",
          {
            "border-b-4 border-black": isOpen,
          }
        )}
        onClick={toggleOpen}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          className="border-2 bg-red-200 rounded-lg p-4"
          aria-expanded={isOpen}
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>
      {!page &&
        isOpen && ( // Only display items if page is not present
          <div className="bg-sky-500/75">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-3 border-b-4 border-black text-white"
              >
                <Link to={item.path}>{item.name}</Link>
              </div>
            ))}
          </div>
        )}
    </section>
  );
};

export default ExpandableSection;
