import { screen } from "@testing-library/react";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testsUtils/customRender";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with a logo ", () => {
      const expectedAltText = "logo chronos";

      customRender(<App />);

      const headerLogo = screen.getByRole("img", { name: expectedAltText });

      expect(headerLogo).toBeInTheDocument();
    });
  });

  describe("When it receives a path to /not-found-page and it renders the Not Found page", () => {
    test("Then it should show the Not Found image", () => {
      const expectedAltText = "post it con chincheta";

      const path = "/not-found-page";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );
      const pageNotFoundImage = screen.getByAltText(expectedAltText);

      expect(pageNotFoundImage).toBeInTheDocument();
    });
  });
});
