# TextWithNewlines

A React Component for turning text with newlines into semantic paragraphs.

## Installation

```sh
npm install --save textwithnewlines
```

## Usage

```js
import TextWithNewlines from "textwithnewlines";

const sampleText = `The first paragraph

Another paragraph.

A third paragraph`;

class App extends React.Component {
  render() {
    return <TextWithNewlines>{sampleText}</TextWithNewlines>;
  }
}
```

Which will output:

```html
<div>
  <p>
    First Paragraph
  </p>
  <p>
    Second Paragraph
  </p>
  <p>
    Third Paragraph
  </p>
</div>
```
