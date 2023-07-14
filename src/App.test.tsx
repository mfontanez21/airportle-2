import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from './test/test-utils'

describe('App', () => {
  test('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Airportle 2.0/i)).toBeInTheDocument();
  });
});