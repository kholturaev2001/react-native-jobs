module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      ["module:react-native-dotenv"], // it doesn't work for as it was mentioned in   https://github.com/adrianhajdin/project_react_native_jobs/issues/5
    ],
  };
};
