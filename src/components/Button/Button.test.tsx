import { vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./Button";
import { Fa1, Fa2 } from "react-icons/fa6";

describe("Unit test for Button:", () => {
  const mockFn = vi.fn();

  const buttonPropsBase: ButtonProps = {
    label: "I am button",
    onBtnClick: mockFn,
  };

  test("components uses testId correctly", () => {
    const testId = "btn-test-1";
    render(<Button {...buttonPropsBase} testId={testId} />);
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });

  test("label is rendered correctly", () => {
    render(<Button {...buttonPropsBase} />);
    const label = screen.getByLabelText(buttonPropsBase.label);
    expect(label).toBeInTheDocument();
  });

  test("onClick function is triggred on click of button", () => {
    render(<Button {...buttonPropsBase} />);
    fireEvent.click(screen.getByText(buttonPropsBase.label));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("prefix and suffix icons correctly displayed", () => {
    const PrefixIcon = <Fa1 data-testid="prefix-icon" />;
    const SuffixIcon = <Fa2 data-testid="suffix-icon" />;

    const { getByTestId } = render(
      <Button
        {...buttonPropsBase}
        prefixIcon={PrefixIcon}
        suffixIcon={SuffixIcon}
      />
    );

    const prefixIconElement = getByTestId("prefix-icon");
    const suffixIconElement = getByTestId("suffix-icon");

    expect(prefixIconElement).toBeInTheDocument();
    expect(suffixIconElement).toBeInTheDocument();
  });

  test("button is disabled properly based on props", () => {
    render(<Button {...buttonPropsBase} disabled />);
    const element = screen.getByLabelText(buttonPropsBase.label);
    expect(element).toBeDisabled();
  });
});
