import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { bubbleSort } from "../algorithms/sorting/BubbleSort";

const AlgorithmVisualizer = ({ algorithm }) => {
  const [data, setData] = useState([10, 3, 15, 7, 8, 23, 74, 18]);
  const [steps, setSteps] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (algorithm === "bubbleSort") {
      setSteps(bubbleSort(data));
    }
  }, [algorithm, data]);

  useEffect(() => {
    if (steps.length > 0) {
      const svg = d3.select("#visualization");
      svg.selectAll("*").remove();

      svg
        .selectAll("rect")
        .data(steps[stepIndex])
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 30)
        .attr("y", (d) => 200 - d * 5)
        .attr("width", 25)
        .attr("height", (d) => d * 5)
        .attr("fill", "teal");
    }
  }, [stepIndex, steps]);

  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const reset = () => {
    setStepIndex(0);
    setData([10, 3, 15, 7, 8, 23, 74, 18]);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <svg id="visualization" width="500" height="200" className="mb-4"></svg>
      <div className="flex space-x-4">
        <button
          onClick={nextStep}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next Step
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AlgorithmVisualizer;
