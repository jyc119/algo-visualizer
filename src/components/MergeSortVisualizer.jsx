import React from "react";
import { useEffect, useState } from "react";
import { performer, restart } from "../algorithms/sorting/MergeSort";

const MergeSortVisualizer = () => {
  const initialData = [10, 3, 15, 7, 8, 23, 74, 18];
  const [data, setData] = useState(initialData);

  return (
    <div className="flex flex-col items-center p-4">
      <canvas id="Canvas" className="mb-4"></canvas>
      <div className="title1 text-xl font-bold mb-4">Sorting Visualization</div>
      <div className="flex space-x-4">
        <button
          onClick={() => performer()}
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
          onClick={() => restart()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default MergeSortVisualizer;
