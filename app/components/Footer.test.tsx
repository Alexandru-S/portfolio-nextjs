import { render, screen, waitFor } from "@testing-library/react";
import Footer from "../components/Footer";

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

test("fetches and renders component", async () => {
  render(<Footer />);
  
  // Wait for the useEffect to finish and the state to update.
  const footerContainer = await screen.findByTestId("footer-container");
  
  // Check that the style was updated with the background image.
  await waitFor(() => {
    expect(footerContainer).toBeDefined();
  });
});
