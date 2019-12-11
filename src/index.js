import React from "react";

const TextWithNewLines = props => {
  return props.children.split("\n").map((paragraph, i) => {
    return paragraph.trim().length > 0 ? <p key={i}>{paragraph}</p> : null;
  });
};

export default TextWithNewLines;
