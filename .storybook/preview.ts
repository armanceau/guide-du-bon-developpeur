import "./docs-theme.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0a0a0a" }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    docs: {
      toc: {
        headingSelector: "h2",
        title: "Sur cette page",
      },
    },
    options: {
      showPanel: false,
    },
  },
};

export default preview;
