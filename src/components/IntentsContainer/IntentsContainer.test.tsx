import { screen, render, fireEvent } from "@testing-library/react";
import IntentsContainer from "./IntentsContainer";
import intentsData from "../../intents.json";
import {
  ADD,
  ADD_ALL,
  ADDED,
  PLACEHOLDER_FOR_INTENT_SEARCH_INPUT,
  REMOVE,
  REMOVE_ALL,
} from "../../constants";

describe("Unit test for IntentsContainer:", () => {
  const data = intentsData;

  beforeEach(() => {
    render(<IntentsContainer />);
  });

  test("bulk addition and count works properly when nothing is selected", () => {
    const bulkSelectionToggleElement = screen.getByTestId(
      "bulkSelectionToggle"
    );
    const selectionCountElement = screen.getByTestId("selectionCount");
    fireEvent.click(bulkSelectionToggleElement);

    expect(selectionCountElement.textContent).toBe(
      `${data.length} / ${data.length} ${ADDED}`
    );

    expect(bulkSelectionToggleElement.textContent).toBe(`${REMOVE_ALL}`);
  });

  test("bulk removal and count works properly when all are selected", () => {
    const bulkSelectionToggleElement = screen.getByTestId(
      "bulkSelectionToggle"
    );
    const selectionCountElement = screen.getByTestId("selectionCount");
    fireEvent.click(bulkSelectionToggleElement); // for adding all
    fireEvent.click(bulkSelectionToggleElement); // for removing all

    expect(selectionCountElement.textContent).toBe(
      `0 / ${data.length} ${ADDED}`
    );

    expect(bulkSelectionToggleElement.textContent).toBe(`${ADD_ALL}`);
  });

  test("individual add/remove works fine with proper count and labels", () => {
    const addRemoveBtn = screen.getByTestId(`cta-${intentsData[0].id}`);
    const selectionCountElement = screen.getByTestId("selectionCount");

    fireEvent.click(addRemoveBtn); // added
    expect(selectionCountElement.textContent).toBe(
      `1 / ${data.length} ${ADDED}`
    );
    expect(addRemoveBtn).toHaveTextContent(`${REMOVE}`);

    fireEvent.click(addRemoveBtn); // removed
    expect(selectionCountElement.textContent).toBe(
      `0 / ${data.length} ${ADDED}`
    );
    expect(addRemoveBtn).toHaveTextContent(`${ADD}`);
  });

  test("when all intents are individually added, the bulk selection text should say 'Remove all'", () => {
    intentsData.forEach((intent) => {
      const addBtn = screen.getByTestId(`cta-${intent.id}`);
      fireEvent.click(addBtn);
    });

    const bulkSelectionToggleElement = screen.getByTestId(
      "bulkSelectionToggle"
    );

    expect(bulkSelectionToggleElement).toHaveTextContent(REMOVE_ALL);
  });

  test("all the intent cards should have a checkmark when all are added", () => {
    const bulkSelectionToggleElement = screen.getByTestId(
      "bulkSelectionToggle"
    );

    fireEvent.click(bulkSelectionToggleElement);

    intentsData.forEach((intent) => {
      const checkmark = screen.getByTestId(`checkmark-${intent.id}`);
      expect(checkmark).toBeInTheDocument();
    });
  });

  test("handles search input correctly", () => {
    const searchValue = intentsData[0].name;
    const searchInputElement = screen.getByPlaceholderText(
      `🔍 ${PLACEHOLDER_FOR_INTENT_SEARCH_INPUT}...`
    );

    fireEvent.change(searchInputElement, { target: { value: searchValue } });

    expect(searchInputElement).toHaveValue(searchValue);
  });

  test("when searched for an expression shows correct intent card with corresponding reply", () => {
    const searchValue = intentsData[0].trainingData.expressions[2];
    const reply = `"${intentsData[0].reply.text}"`;
    const searchInputElement = screen.getByPlaceholderText(
      `🔍 ${PLACEHOLDER_FOR_INTENT_SEARCH_INPUT}...`
    );

    fireEvent.change(searchInputElement, { target: { value: searchValue } });

    const outputElement = screen.getByText(reply);

    expect(outputElement).toBeInTheDocument();
  });
});
