import React from "react";
import AlgorithmVisualizer from "../components/AlgorithmVisualizer";

const QuickSort = () => {
  return (
    <section className="bg-indigo-50">
      <h1 className="text-3xl text-center font-bold py-8">Quick Sort</h1>
      <AlgorithmVisualizer algorithm="quickSort" />
    </section>
  );
};

export default QuickSort;
