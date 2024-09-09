import React from "react";
import "../../styles/TraversalInfo.css";

const displayInfo = (traversal) => {
  const info = {
    Inorder: `1. Traverse the left subtree i.e. call Inorder(left-subtree)\n\n2. Visit the Node \n\n 3. Traverse the right subtree i.e. call Inorder(right-subtree)`,
    Preorder: `1. Visit the Node \n\n 2. Traverse the left subtree i.e. call Preorder(left-subtree) \n\n 3. Traverse the right subtree i.e. call Preorder(right-subtree)`,
    Postorder: `1. Traverse the left subtree i.e. call Postorder(left-subtree)\n\n2. Traverse the right subtree i.e. call Postorder\n\n 3. Visit the Node`,
  };

  return info[traversal];
};

const TraversalInfo = (props) => {
  const { selectedTraversal: traversal } = props;
  return (
    <div className="info-container">
      {traversal !== "Select Traversal" ? (
        <span className="info-header">{traversal} Traversal</span>
      ) : (
        <span className="info-header">Choose any traversal</span>
      )}
      <div className="display-linebreak">{displayInfo(traversal)}</div>
    </div>
  );
};

export default TraversalInfo;
