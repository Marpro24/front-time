import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainDarkColor: string;
      mainLightColor: string;
      loginBackgroundColor: string;
      shellColor: string;
      buttonColor: string;
      formColor: string;
      positiveToastColor: string;
      negativeToastColor: string;
    };
    font: {
      mainFontFamily: string;
      notFoundFontFamily: string;
    };
  }
}
