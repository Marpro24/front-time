import { screen } from "@testing-library/react";
import { customRenderWithoutRouter } from "../../testsUtils/customRender";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives the text 'Únete'", () => {
    test("Then it should show the text 'Únete'", () => {
      const expectedButtonText = "Únete";

      customRenderWithoutRouter(
        <Button text={expectedButtonText} type="button" />,
      );
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
