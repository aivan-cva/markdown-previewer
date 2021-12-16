import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import { useSelector, useDispatch } from "react-redux";
// const html = marked.parse("# Marked in Node.js\n\nRendered by **marked**.");
// property -> dangerouslySetInnerHTML={{ __html: html }

marked.use({
  breaks: true,
});

function App() {
  const dispatch = useDispatch();
  const editor = useSelector((state) => state.editor);

  const onChange = (event) => {
    dispatch({ type: "EDITOR_CHANGE", payload: event.target.value });
  };
  return (
    <div className="App">
      <textarea
        id="editor"
        className="mkd-input"
        onChange={onChange}
      ></textarea>
      <div
        id="preview"
        className="mkd-output"
        dangerouslySetInnerHTML={{ __html: marked.parse(editor) }}
      ></div>
    </div>
  );
}

export default App;
