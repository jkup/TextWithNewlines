export default TextWithNewlines = props => {
  return props.children
    .split("\n")
    .map((paragraph, i) => <p key={i}>{paragraph}</p>);
};
