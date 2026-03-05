/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/docs/**/*.mdx"],
  addons: [
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: false,
  },
};
export default config;
