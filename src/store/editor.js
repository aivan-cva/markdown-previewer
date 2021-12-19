export const initialText = `# HEADER 1\n## SUBHEADER \n\`<div>INLINE CODE</div>\`\n\`\`\`\n function fn(){}\n\`\`\`\n[Link](https://www.freecodecamp.org)\n- item1\n- item2\n- item3\n**Bold Text**\n> Block Quotes!\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

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
