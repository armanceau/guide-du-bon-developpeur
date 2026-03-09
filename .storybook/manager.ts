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
    barTextColor: "#d4d4d8",
    barHoverColor: "#f4f4f5",
    barSelectedColor: "#60a5fa",
    colorPrimary: "#fafafa",
    colorSecondary: "#a1a1aa",
    textColor: "#fafafa",
    textMutedColor: "#d4d4d8",
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
