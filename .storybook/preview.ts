import "./docs-theme.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: "dark", value: "#0a0a0a" },
      },
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
      source: {
        dark: true,
      },
    },
    options: {
      showPanel: false,
      showToolbar: true,
    },
  },
  globalTypes: {
    locale: {
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", right: "🇺🇸", title: "English" },
          { value: "fr", right: "🇫🇷", title: "Français" },
        ],
      },
    },
  },
  initialGlobals: {
    locale: "fr",

    backgrounds: {
      value: "dark",
    },
  },
};

export default preview;
