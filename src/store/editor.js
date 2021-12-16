const initialText = `# HEADER 1\n ## HEADER 2\n ### HEADER 3\n \`<div></div>\`\n \`\`\` function fn(){} \`\`\`\n [fcc](https://www.freecodecamp.org)\n - item1\n - item2\n - item3\n **bold**\n > Block Quotes!\n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) `;

const initialState = {
  editor: initialText,
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDITOR_CHANGE":
      return { ...state, editor: action.payload };
    default:
      return state;
  }
};
