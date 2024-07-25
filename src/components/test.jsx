import React from "react";
import { useEffect } from "react";
import { performer } from "../algorithms/sorting/MergeSort";

const MergeSortVisualizer = () => {
  useEffect(() => {
    performer();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <canvas id="Canvas" className="mb-4"></canvas>
      <div className="title1 text-xl font-bold mb-4">Sorting Visualization</div>
      <div className="flex space-x-4">
        <button
          onClick={() => performer()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default MergeSortVisualizer;
