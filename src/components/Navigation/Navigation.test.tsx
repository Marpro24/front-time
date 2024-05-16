import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should shoy a navigation menu button", () => {
      const expectedAriaLabelText = "navigation menu button";

      customRender(<Navigation />);
      const inicioText = screen.getByLabelText(expectedAriaLabelText);

      expect(inicioText).toBeInTheDocument();
    });
  });
});
