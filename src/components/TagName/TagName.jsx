import React from "react";

// Import style
import "../../style/components/_tagName.scss";

const TagName = ({ tag }) => {
  return (
    <div className="tag-items">
      <p>{tag} </p>
    </div>
  );
};

export default TagName;
