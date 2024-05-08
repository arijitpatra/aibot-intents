import { screen, render } from "@testing-library/react";
import Chip, { ChipProps } from "./Chip";

describe("Unit test for Chip:", () => {
  const chipPropsBase: ChipProps = {
    label: "I am chip",
  };

  beforeEach(() => {
    render(<Chip {...chipPropsBase} />);
  });

  test("renders the label correctly", () => {
    const label = screen.getByText(chipPropsBase.label);
    expect(label).toBeInTheDocument();
  });
});
