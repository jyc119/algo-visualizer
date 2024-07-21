import React from "react";
import ExpandableSection from "../components/ExpandableSection";

const sortingAlgorithms = [
  { name: "Bubble Sort", path: "/sorting/bubble" },
  { name: "Quick Sort", path: "/sorting/quick" },
  { name: "Merge Sort", path: "/sorting/merge" },
];

const HomePage = () => {
  return <ExpandableSection title="Sorting" items={sortingAlgorithms} />;
};

export default HomePage;
