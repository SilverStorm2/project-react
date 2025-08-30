import { createStore } from "redux";
import initialState from "./initialState";
import strContains from "../utils/strContains";

// Selektory
export const getAllColumns = (state) => state.columns;
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString || "")
  );

// Kreatory akcji
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_COLUMN") {
    const newId =
      state.columns.length > 0
        ? Math.max(...state.columns.map((col) => col.id)) + 1
        : 1;
    const newColumn = { ...action.payload, id: newId };
    return {
      ...state,
      columns: [...state.columns, newColumn],
    };
  }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
