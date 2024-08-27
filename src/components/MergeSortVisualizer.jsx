import React from "react";
import { useEffect, useState } from "react";
import { performer, restart, nextStep } from "../algorithms/sorting/MergeSort";

const MergeSortVisualizer = () => {
  const initialData = [10, 3, 15, 7, 8, 23, 74, 18, 20, 25, 30, 35, 60, 100];
  const [data, setData] = useState(initialData);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="title1 text-xl font-bold mb-2">Merge Sort</div>
      <canvas
        id="Canvas"
        className="mb-2"
        style={{ maxHeight: "600px" }}
      ></canvas>
      <div className="flex space-x-4">
        <button
          onClick={() => performer(initialData)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start
        </button>
        <button
          onClick={() => nextStep()}
          id="nextStepButton"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next Step
        </button>
        <button
          onClick={() => restart(initialData)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default MergeSortVisualizer;
