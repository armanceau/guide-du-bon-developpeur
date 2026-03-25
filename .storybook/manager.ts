import { createElement } from "react";
import { addons, types } from "storybook/manager-api";
import { create } from "storybook/theming";

const GITHUB_REPO_URL = "https://github.com/armanceau/guide-du-bon-developpeur";

addons.register("guide/github-link", () => {
  addons.add("guide/github-link/tool", {
    title: "GitHub",
    type: types.TOOL,
    match: ({ viewMode }) => Boolean(viewMode),
    render: () =>
      createElement(
        "a",
        {
          key: "github-link",
          title: "Ouvrir le repository GitHub",
          href: GITHUB_REPO_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            color: "#d4d4d8",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: 600,
            padding: "0 8px",
            lineHeight: "32px",
            display: "inline-flex",
            alignItems: "center",
          },
        },
        createElement(
          "span",
          {
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            },
          },
          createElement(
            "svg",
            {
              width: 14,
              height: 14,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { display: "block" },
              "aria-hidden": true,
            },
            createElement("path", {
              d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            }),
            createElement("path", {
              d: "M9 18c-4.51 2-5-2-7-2",
            })
          ),
          createElement("span", null, "GitHub")
        ),
      ),
  });
});

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
