import React from "react";
import Tree from "react-tree-graph";

const TreeDiagram = (props) => {
  return (
    <div>
      <Tree
        data={props.data}
        height={props.height}
        width={props.width}
        nodeRadius={props.nr}
        svgProps={{
          transform: "rotate(90)",
          viewBox: "-50 -10 400 400",
        }}
        textProps={{
          transform: "rotate(-90)",
          x: "-20",
          y: "2",
        }}
      />
    </div>
  );
};

export default TreeDiagram;
