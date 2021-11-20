import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
// const html = marked.parse("# Marked in Node.js\n\nRendered by **marked**.");
// property -> dangerouslySetInnerHTML={{ __html: html }

function App() {
  const [html, setHtml] = useState("");
  return (
    <div className="App">
      <textarea
        className="mkd-input"
        onChange={(event) => setHtml(event.target.value)}
      ></textarea>
      <div
        className="mkd-output"
        dangerouslySetInnerHTML={{ __html: marked.parse(html) }}
      ></div>
    </div>
  );
}

export default App;
