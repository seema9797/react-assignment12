import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders learn react link", () => {
  it("should render hello world", () => {
    render(<App />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
