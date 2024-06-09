const path = require('path');
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook',
    '@storybook/addon-themes',
  ],

  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    return config;
  },

  features: {
    emotionAlias: false,
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {
    docsPage: true,
  },

  // staticDir: ['../storybook-static'],
  staticDir: ['../public', '../static'],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
