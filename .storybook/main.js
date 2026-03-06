/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    //👇 Your documentation written in MDX along with your stories goes here
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
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
