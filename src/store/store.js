import { createStore } from "redux";
import { editorReducer } from "./editor";

export const store = createStore(editorReducer);
