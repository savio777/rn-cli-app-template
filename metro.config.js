const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
};

const defaultConfig = mergeConfig(getDefaultConfig(__dirname), config);

module.exports = withStorybook(defaultConfig);
