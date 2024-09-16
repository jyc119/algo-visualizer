import React from "react";
import TraversalInfo from "../algorithms/trees/TraversalInfo";
import Dropdown from "../algorithms/trees/Dropdown";
import "../styles/Tree.css";
import { useState } from "react";

const TreePage = () => {
  // Using useState hook to manage state in functional components
  const [selectedTraversal, setSelectedTraversal] =
    useState("Select Traversal");
  const [traversalOrder, setTraversalOrder] = useState([]);
  const [list, setList] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([
    { id: 0, value: "Postorder", selected: false, key: "dropdownOptions" },
    { id: 1, value: "Preorder", selected: false, key: "dropdownOptions" },
    { id: 2, value: "Inorder", selected: false, key: "dropdownOptions" },
    { id: 3, value: "Levelorder", selected: false, key: "dropdownOptions" },
  ]);

  return (
    <div className="flex h-screen">
      <div className="bg-blue-200 w-1/2 h-full flex items-center justify-center">
        <p>Hello</p>
      </div>
      <div className="bg-blue-900 w-1/2 h-full flex flex-col items-center justify-evenly">
        <Dropdown options="" title="Select Traversal" />
        <div className="bg-blue-200 p-4">
          <h2 className="text-lg font-bold">Choose any traversal</h2>
        </div>
      </div>
    </div>
  );
};

export default TreePage;
