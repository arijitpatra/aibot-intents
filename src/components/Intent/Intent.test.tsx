import { screen, render, fireEvent } from "@testing-library/react";
import Intent from "./Intent";
import intentsData from "../../../public/intents.json";
import { vi } from "vitest";

describe("Unit test for Intent:", () => {
  const mockFn = vi.fn();
  const data = intentsData[0];

  const intentPropsBase = {
    data: data,
    onCtaClick: mockFn,
  };

  test("name is displayed", () => {
    render(<Intent {...intentPropsBase} />);
    const intentName = screen.getByText(data.name);
    expect(intentName).toBeInTheDocument();
  });

  test("description is displayed", () => {
    render(<Intent {...intentPropsBase} />);
    const description = screen.getByText(data.description);
    expect(description).toBeInTheDocument();
  });

  test("the three training expressions are displayed correctly", () => {
    render(<Intent {...intentPropsBase} />);
    const expressions = data.trainingData.expressions;

    let expressionsCount = 0;

    expressions.forEach((expression) => {
      expressionsCount += 1;
      const expressionTag = screen.getByText(expression.text);
      expect(expressionTag).toBeInTheDocument();
    });

    expect(expressionsCount).toBe(3);
  });

  test("reply is displayed", () => {
    render(<Intent {...intentPropsBase} />);
    const reply = screen.getByText(`"${data.reply.text}"`);
    expect(reply).toBeInTheDocument();
  });

  test("CTA is shown", () => {
    render(<Intent {...intentPropsBase} />);
    const ctaElement = screen.getByTestId(`cta-${data.id}`);
    expect(ctaElement).toBeInTheDocument();
  });

  test("only one CTA should be there in the DOM", () => {
    render(<Intent {...intentPropsBase} />);
    const numberOfButtonsInTheDom = screen.getAllByRole("button").length;
    expect(numberOfButtonsInTheDom).toBe(1);
  });

  test("calls onCtaClick when CTA is clicked", () => {
    render(<Intent {...intentPropsBase} />);
    fireEvent.click(screen.getByTestId(`cta-${data.id}`));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("does not display checkmark when isSelected is false", () => {
    render(<Intent {...intentPropsBase} />);
    expect(
      screen.queryByTestId(`checkmark-${data.id}`)
    ).not.toBeInTheDocument();
  });

  test("displays checkmark when isSelected is true", () => {
    render(<Intent {...intentPropsBase} isSelected={true} />);
    expect(screen.getByTestId(`checkmark-${data.id}`)).toBeInTheDocument();
  });
});
