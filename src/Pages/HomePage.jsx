import React from "react";
import ExpandableSection from "../components/ExpandableSection";

const sorting_items = [
  <div key="1">Bubble Sort</div>,
  <div key="2">Quick Sort</div>,
  <div key="3">Merge Sort</div>,
];

const HomePage = () => {
  return <ExpandableSection title="Sorting" children={sorting_items} />;
};

export default HomePage;
