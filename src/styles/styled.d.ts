import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainLightColor: string;
      backgroundDarkColor: string;
      backgroundMainDarkColor: string;
      backgroundMustardColor: string;
      backgroundLightColor: string;
      positiveToastColor: string;
      negativeToastColor: string;
    };
    font: {
      mainFontFamily: string;
      secondaryFontFamily: string;
    };
  }
}
