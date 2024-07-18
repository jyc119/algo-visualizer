import React from "react";
import AlgorithmVisualizer from "../components/AlgorithmVisualizer";

const BubbleSort = () => {
  return (
    <section className="bg-indigo-50">
      <h1 className="text-3xl text-center font-bold py-8">Bubble Sort</h1>
      <AlgorithmVisualizer algorithm="bubbleSort" />
    </section>
  );
};

export default BubbleSort;
