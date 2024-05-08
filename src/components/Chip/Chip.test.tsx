import { screen, render } from "@testing-library/react";
import Chip from "./Chip";

describe("Unit test for Chip:", () => {
  const chipPropBase = {
    label: "I am chip",
  };

  beforeEach(() => {
    render(<Chip {...chipPropBase} />);
  });

  test("renders the label correctly", () => {
    const label = screen.getByText(chipPropBase.label);
    expect(label).toBeInTheDocument();
  });
});
