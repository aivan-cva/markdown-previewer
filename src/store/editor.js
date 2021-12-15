const initialState = {
  editor: "# HELLO",
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDITOR_CHANGE":
      return { ...state, editor: action.payload };
    default:
      return state;
  }
};
