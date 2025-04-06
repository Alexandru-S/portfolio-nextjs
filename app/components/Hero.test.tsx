import { render, screen, waitFor } from "@testing-library/react";
import Hero from "../components/Hero";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          results: [
            { urls: { regular: "http://example.com/test-image.jpg" } },
          ],
        }),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

test("fetches image and applies it as a background", async () => {
  render(<Hero />);
  
  // Wait for the useEffect to finish and the state to update.
  const heroContainer = await screen.findByTestId("hero-container");
  
  // Check that the style was updated with the background image.
  await waitFor(() => {
    expect(heroContainer).toHaveStyle(
      "background-image: url(http://example.com/test-image.jpg)"
    );
  });
});
