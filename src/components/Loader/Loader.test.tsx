import { screen, render } from "@testing-library/react";
import Loader from "./Loader";
import { LOADING_MESSAGE } from "../../constants";

describe("Unit test for Loader:", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  test("renders the loading message correctly", () => {
    const text = screen.getByText(`⌛ ${LOADING_MESSAGE}...`);
    expect(text).toBeInTheDocument();
  });
});
