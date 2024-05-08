import { screen, render, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { vi } from "vitest";

describe("Unit test for Search:", () => {
  const mockFn = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    render(<Search value="abc" onSearch={mockFn} />);
  });

  test("calls the onSearchChange when typed", () => {
    const searchElement = screen.getByPlaceholderText("🔍 Type to search...");
    fireEvent.change(searchElement, { target: { value: "abcd" } });
    fireEvent.change(searchElement, { target: { value: "abcde" } });
    fireEvent.change(searchElement, { target: { value: "abcdef" } });
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});
