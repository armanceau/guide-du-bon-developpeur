/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    options: {
      storySort: (a, b) => {
        const order = [
          "Guide du bon développeur/Introduction",
          "Guide du bon développeur/Tests",
          "Guide du bon développeur/Code Reviews",
          "Guide du bon développeur/Clean Code",
          "Guide du bon développeur/Architecture",
          "Guide du bon développeur/Git & Versionning",
          "Guide du bon développeur/Documentation",
        ];

        const aTitle = a.title;
        const bTitle = b.title;

        const aIndex = order.indexOf(aTitle);
        const bIndex = order.indexOf(bTitle);

        if (aIndex >= 0 && bIndex >= 0) {
          return aIndex - bIndex;
        }

        return 0;
      },
    },
  },
};

export default preview;
