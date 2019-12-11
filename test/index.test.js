import React from "react";
import { render } from "@testing-library/react";
import TextWithNewlines from "../src/index";

test("Renders multiple paragraphs", () => {
  const testText = `First Paragraph
    
    Second Paragraph
    
    Third Paragraph`;
  const { container } = render(<TextWithNewlines>{testText}</TextWithNewlines>);
  expect(container.querySelectorAll("p").length).toBe(3);
});
