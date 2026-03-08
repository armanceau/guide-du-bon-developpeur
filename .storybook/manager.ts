import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Guide du bon developpeur",
    appBg: "#0a0a0a",
    appContentBg: "#0a0a0a",
    appBorderColor: "#18181b",
    appBorderRadius: 0,
    barBg: "#0a0a0a",
    barTextColor: "#a1a1aa",
    barSelectedColor: "#fafafa",
    colorPrimary: "#fafafa",
    colorSecondary: "#a1a1aa",
    textColor: "#fafafa",
    textInverseColor: "#0a0a0a",
    inputBg: "#111111",
    inputBorder: "#27272a",
    inputTextColor: "#fafafa",
    inputBorderRadius: 8,
  }),
  panelPosition: "right",
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true },
  },
});
