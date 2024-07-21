import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const ExpandableSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className=" bg-blue-400 mb-4">
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
      {isOpen && (
        <div className="bg-sky-500/75">
          {items.map((item, index) => (
            <div key={index} className="p-3 border-b-4 border-black text-white">
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ExpandableSection;
