import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { bubbleSort } from "../algorithms/sorting/BubbleSort";

const AlgorithmVisualizer = ({ algorithm }) => {
  const initialData = [10, 3, 15, 7, 8, 23, 74, 18];
  const [data, setData] = useState(initialData);
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

      const group = svg.append("g").attr("transform", "translate(120, 100)"); // Translate the group 3 pixels right and 3 pixels down

      group
        .selectAll("rect")
        .data(steps[stepIndex])
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 30)
        .attr("y", (d) => 200 - d * 5)
        .attr("width", 25)
        .attr("height", (d) => d * 5)
        .attr("fill", "teal");

      // Append text elements
      group
        .selectAll("text")
        .data(steps[stepIndex])
        .enter()
        .append("text")
        .attr("x", (d, i) => i * 30 + 12.5) // Center text under the bar
        .attr("y", 220) // Position text below the bars
        .attr("text-anchor", "middle") // Center the text horizontally
        .attr("fill", "black") // Text color
        .text((d) => d); // Text content
    }
  }, [stepIndex, steps]);

  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const reset = () => {
    setStepIndex(0);
    setData(initialData);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <svg id="visualization" width="500" height="400" className="mb-4"></svg>
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
